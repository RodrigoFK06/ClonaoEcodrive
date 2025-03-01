import type { WinnersApiResponse } from "@/types/winners";
import { fetchFromApi } from "./api";
import { fallbackWinners } from "./fallback-data";
import { API_BASE_URL } from "@/lib/config";

export async function fetchWinners(): Promise<WinnersApiResponse> {
  try {
    console.log("📡 Solicitando ganadores desde /api/ganadores...");

    const response = await fetchFromApi("ganadores", fallbackWinners);
    console.log("🔍 Respuesta de la API en fetchWinners:", response);

    // 🔥 Ajustamos la estructura
    const data = response.data || [];

    if (!Array.isArray(data)) {
      throw new Error("La API no devolvió un array de ganadores.");
    }

    return {
      currentWeek: "Semana Actual",
      monthlyPrize: { title: "Premio desconocido", imageUrl: "/placeholder.svg" },
      winnersList: data.map((winner: any) => {
        const tipoNormalizado = winner.tipo ? winner.tipo.toLowerCase().trim() : "desconocido"; // 🔥 Asegurar tipo válido
        console.log(`🏆 Procesando ganador: ${winner.nombre_completo}, Tipo: ${tipoNormalizado}`); // 🛠 Debug

        return {
          id: winner.id,
          sorteo_titulo: winner.sorteo_titulo,
          sorteo_fecha: winner.sorteo_fecha,
          nombre_completo: winner.nombre_completo,
          tipo: tipoNormalizado, // ✅ Ahora siempre es minúscula y sin espacios
          premio_titulo: winner.premio_titulo || "Premio Desconocido",
          premio_imagen: winner.premio_imagen
            ? (winner.premio_imagen.includes("https://mediumaquamarine-goat-867388.hostingersite.com") ? winner.premio_imagen : `${API_BASE_URL}/${winner.premio_imagen.replace(/^\/+/, '')}`)
            : "/placeholder.svg",
          es_ganador: winner.es_ganador,
        };
      }),
    };
  } catch (error) {
    console.error("❌ Error en fetchWinners:", error);
    return fallbackWinners;
  }
}
