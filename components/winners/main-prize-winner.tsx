"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fetchWinners } from "@/lib/api-ganadores";
import type { WinnersApiResponse } from "@/types/winners";

export default function MainPrizeWinner() {
  const [winnersData, setWinnersData] = useState<WinnersApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWinners = async () => {
      try {
        const response = await fetchWinners();
        setWinnersData(response);
      } catch (e) {
        setError("Error al cargar los ganadores.");
      } finally {
        setIsLoading(false);
      }
    };

    loadWinners();
  }, []);

  if (isLoading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="mb-12">
      <motion.h2 className="text-4xl font-black text-[#E67E22] text-center mb-8">
        ¡GRAN PREMIO DEL MES!
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div className="relative w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden">
          <Image
            src={winnersData?.monthlyPrize.imageUrl || "/placeholder.svg"}
            alt={winnersData?.monthlyPrize.title || "Premio mensual"}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="md:w-1/2">
          <motion.h3 className="text-3xl font-black text-[#E67E22] mb-4">
            {winnersData?.monthlyPrize.title}
          </motion.h3>
          <div className="space-y-4">
            {winnersData?.winnersList
              .filter((winner) => winner.es_ganador === "1")
              .slice(0, 2)
              .map((winner, index) => (
                <motion.div key={index} className="bg-[#E67E22] rounded-xl p-4 text-center">
                  {`GANADOR ${index + 1}: ${winner.nombre_completo}`}
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
