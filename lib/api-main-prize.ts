import { API_BASE_URL } from "@/lib/config"; // Asegúrate de definir esto en tu config.ts

export interface MainPrize {
  title: string;
  subtitle: string;
  detail: string;
  note: string;
  date: string;
  imageUrl: string;
}

export async function fetchMainPrize() {
  try {
    console.log("📡 Solicitando gran premio...");

    const response = await fetch('/api/multimedia', {
      cache: "no-store" // 👈 Desactiva caché en el cliente
    });
    if (!response.ok) {
      throw new Error(`Error al obtener el premio: ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No se encontraron premios en la API.");
    }

    // 📌 Seleccionar el PRIMER resultado de la API
    const firstResult = data[0];

    const formattedPrize: MainPrize = {
      title: firstResult.titulo || "¡GRAN PREMIO DEL MES!",
      subtitle: firstResult.subtitulo || "Detalles no disponibles",
      detail: firstResult.detalle || "Descripción no disponible",
      note: firstResult.nota || "No hay nota disponible",
      date: `Fecha: ${firstResult.fecha || "Sin fecha"}`,
      imageUrl: firstResult.imagen
        ? `${API_BASE_URL}/${firstResult.imagen.replace(/^\/+/, "")}`
        : "/placeholder.svg",
    };

    console.log("✅ Premio obtenido:", formattedPrize);
    return { data: formattedPrize };
  } catch (error) {
    console.error("❌ Error al obtener el Gran Premio:", error);
    return {
      data: {
        title: "¡GRAN PREMIO DEL MES!",
        subtitle: "2 Viajes a Malabrigo 3D/2N\n(2 personas todo pagado)",
        detail: "Descripción no disponible",
        note: "Nota: La entrega del premio será para conductor y pasajero",
        date: "Fecha: 30 de Marzo",
        imageUrl: "/placeholder.svg",
      },
      error: (error as Error).message,
    };
  }
}
