import type { ApiResponse } from "@/types/rewards"
import { fallbackRewards } from "./fallback-data"

export async function fetchFromApi<T>(endpoint: string, fallbackData: T): Promise<{ data: T; message?: string; error?: string }> {
  try {
    const response = await fetch(`/api/${endpoint}`);

    if (!response.ok) {
      console.warn(`⚠️ API Error en ${endpoint}: ${response.statusText}`);
      return { data: fallbackData, message: `Mostrando datos de ejemplo. Actualizando ${endpoint}...` };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(`❌ Error en fetchFromApi(${endpoint}):`, error);
    return { data: fallbackData, message: `Mostrando datos de ejemplo. Actualizando ${endpoint}...`, error: "Error al obtener datos" };
  }
}

export async function fetchDriverRewards() {
  try {
    const response = await fetch("/api/driver-rewards");
    if (!response.ok) throw new Error("Error en API de conductores");

    return await response.json();
  } catch (error) {
    return {
      data: fallbackRewards.driverRewards,
      message: "Mostrando datos de ejemplo. Actualizando premios...",
    };
  }
}

export async function fetchPassengerRewards() {
  try {
    const response = await fetch("/api/passenger-rewards");
    if (!response.ok) throw new Error("Error en API de pasajeros");

    return await response.json();
  } catch (error) {
    return {
      data: fallbackRewards.passengerRewards,
      message: "Mostrando datos de ejemplo. Actualizando premios...",
    };
  }
}
export async function fetchWithAuth(url: string, options: { headers?: HeadersInit } = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: "include", // 🔥 Esto permite enviar cookies de sesión desde el backend
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Error en la petición");

  return response.json();
}
