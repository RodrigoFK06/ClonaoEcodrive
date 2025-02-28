import type { WinnersApiResponse } from "@/types/winners";
import { fetchFromApi } from "./api";
import { fallbackWinners } from "./fallback-data";

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
      currentWeek: "Semana Actual", // Puedes ajustar esto si la API lo provee
      monthlyPrize: { title: "Premio desconocido", imageUrl: "/placeholder.svg" },
      winnersList: data.map((winner: any) => ({
        id: winner.id,
        sorteo_titulo: winner.sorteo_titulo,
        sorteo_fecha: winner.sorteo_fecha,
        nombre_completo: winner.nombre_completo,
        premio_titulo: winner.premio_titulo || "Premio Desconocido",
        premio_imagen: winner.premio_imagen
          ? `http://localhost:8080/${winner.premio_imagen}`
          : "/placeholder.svg",
        es_ganador: winner.es_ganador,
      })),
    };
  } catch (error) {
    console.error("❌ Error en fetchWinners:", error);
    return fallbackWinners;
  }
}

