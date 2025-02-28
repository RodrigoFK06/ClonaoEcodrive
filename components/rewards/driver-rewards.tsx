"use client";

import { useEffect, useState } from "react";
import type { Reward } from "@/types/rewards";
import { fetchDriverRewards } from "@/lib/api-prizes"; // Ahora desde api-prizes.ts
import RewardsGrid from "./rewards-grid";
import LoadingMessage from "../ui/loading-message";

export default function DriverRewards() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    const loadRewards = async () => {
      try {
        setIsLoading(true);
        const response = await fetchDriverRewards();

        if (!Array.isArray(response)) {
          throw new Error("La API no devolvió un array de premios");
        }

        setRewards(response);
      } catch (e) {
        setMessage("Mostrando datos de ejemplo. Actualizando premios...");
      } finally {
        setIsLoading(false);
      }
    };

    loadRewards();
  }, []);

  if (isLoading) {
    return <LoadingMessage />;
  }

  return (
    <RewardsGrid
      title="PREMIOS CONDUCTORES"
      rewards={rewards} // 👈 Ya no convertimos nada aquí, porque `api-prizes.ts` ya devuelve los datos correctos
      message={message}
      isLoading={isLoading}
    />
  );
}
