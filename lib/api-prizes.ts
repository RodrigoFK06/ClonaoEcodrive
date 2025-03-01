import { fetchFromApi } from "./api";
import { fallbackRewards } from "./fallback-data";
import type { Reward } from "@/types/rewards";
import { API_BASE_URL } from "@/lib/config";

export async function fetchDriverRewards(): Promise<Reward[]> {
  try {
    console.log("📡 Solicitando premios para conductores desde /api/premios...");
    
    const response = await fetchFromApi("premios", fallbackRewards.driverRewards);
    console.log("🔍 Respuesta de la API en fetchDriverRewards:", response);

    const rewards = response.data || [];

    if (!Array.isArray(rewards)) {
      throw new Error("La API no devolvió un array de premios");
    }

    return rewards
      .filter((reward) => reward.tipo === "conductor")
      .map((reward) => ({
        id: reward.id,
        titulo: reward.titulo,  // 👈 Ahora usamos `titulo`
        dia: reward.dia,      // 👈 Ahora usamos `dias`
        imagen: reward.imagen ? `${API_BASE_URL}/${reward.imagen}` : `${API_BASE_URL}/default.jpg`,
        descripcion: reward.descripcion, // 👈 Agregamos `descripcion`
        tipo: reward.tipo,
      }));
  } catch (error) {
    console.error("❌ Error en fetchDriverRewards:", error);
    return fallbackRewards.driverRewards.map((reward) => ({
      id: reward.id,
      titulo: reward.titulo,
      dia: reward.dia,
      imagen: reward.imagen ? `${API_BASE_URL}/${reward.imagen}` : `${API_BASE_URL}/default.jpg`,
      descripcion: reward.descripcion, // 👈 Agregamos `descripcion`
      tipo: reward.tipo,
    }));
  }
}

export async function fetchPassengerRewards(): Promise<Reward[]> {
  try {
    console.log("📡 Solicitando premios para pasajeros desde /api/premios...");

    const response = await fetchFromApi("premios", fallbackRewards.passengerRewards);
    console.log("🔍 Respuesta de la API en fetchPassengerRewards:", response);

    const rewards = response.data || [];

    if (!Array.isArray(rewards)) {
      throw new Error("La API no devolvió un array de premios");
    }

    return rewards
      .filter((reward) => reward.tipo === "pasajero")
      .map((reward) => ({
        id: reward.id,
        titulo: reward.titulo,
        dia: reward.dia,
        imagen: reward.imagen ? `${API_BASE_URL}/${reward.imagen}` : `${API_BASE_URL}/default.jpg`,
        descripcion: reward.descripcion, // 👈 Agregamos `descripcion`
        tipo: reward.tipo,
      }));
  } catch (error) {
    console.error("❌ Error en fetchPassengerRewards:", error);
    return fallbackRewards.passengerRewards.map((reward) => ({
      id: reward.id,
      titulo: reward.titulo,
      dia: reward.dia,
      imagen: reward.imagen ? `${API_BASE_URL}/${reward.imagen}` : `${API_BASE_URL}/default.jpg`,
      descripcion: reward.descripcion, // 👈 Agregamos `descripcion`
      tipo: reward.tipo,
    }));
  }
}