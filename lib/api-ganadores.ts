import type { WinnersApiResponse } from "@/types/winners";
import { fetchFromApi } from "./api";

const fallbackWinners = {
  currentWeek: "Semana 10",
  monthlyPrize: {
    title: "Viaje a Punta Cana",
    imageUrl: "/placeholder.svg",
  },
  winnersList: [
    { id: "1", name: "Carlos Pérez", prize: "Tarjeta de Combustible", imageUrl: "/placeholder.svg" },
    { id: "2", name: "Ana Torres", prize: "Cena en Restaurante", imageUrl: "/placeholder.svg" },
  ],
};

export async function fetchWinners(): Promise<WinnersApiResponse> {
  const response = await fetchFromApi("ganadores", fallbackWinners);
  return response.data;
}
