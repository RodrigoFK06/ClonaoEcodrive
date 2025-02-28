"use client";

import { useEffect, useState } from "react";
import type { Reward } from "@/types/rewards";
import { fetchPassengerRewards } from "@/lib/api-prizes"; // Ahora desde api-prizes.ts
import RewardsGrid from "./rewards-grid";

export default function PassengerRewards() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const loadRewards = async () => {
      try {
        setIsLoading(true);
        const response = await fetchPassengerRewards();

        if (!Array.isArray(response)) {
          throw new Error("La API no devolvió un array de premios");
        }

        setRewards(response);
      } catch (e) {
        setError("Error al cargar los premios");
      } finally {
        setIsLoading(false);
      }
    };

    loadRewards();
  }, []);

  return (
    <RewardsGrid
      title="PREMIOS PASAJEROS"
      rewards={rewards} // 👈 Ya no convertimos nada aquí, porque `api-prizes.ts` ya devuelve los datos correctos
      isLoading={isLoading}
      error={error}
    />
  );
}
