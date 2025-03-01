"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WinnerCard from "./winner-card";
import { fetchWinners } from "@/lib/api-ganadores";
import type { Winner } from "@/types/winners";

export default function WinnersGrid({ title, tipo, selectedDate }: { title: string; tipo: string; selectedDate: string }) {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWinners = async () => {
      try {
        const response = await fetchWinners();

        // 🔥 Filtrar solo los ganadores correctos por tipo (conductor/pasajero)
        const filteredWinners = response.winnersList
          .filter((winner) => winner.es_ganador === "1")
          .filter((winner) => {
            console.log(`🧐 Comparando: ${winner.tipo} === ${tipo.toLowerCase().trim()}`);
            return winner.tipo === tipo.toLowerCase().trim();
          })
          .filter((winner) => winner.sorteo_fecha === selectedDate);
          

        console.log(`✅ Ganadores filtrados para tipo "${tipo}":`, filteredWinners);

        setWinners(filteredWinners);
      } catch (e) {
        setError("Error al cargar los ganadores.");
      } finally {
        setIsLoading(false);
      }
    };

    loadWinners();
  }, [tipo, selectedDate]);

  if (isLoading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="mb-12">
      <motion.h2 className="text-4xl font-bold text-[#E67E22] text-center mb-8">
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {winners.length > 0 ? (
          winners.map((winner) => {
            const imageUrl = winner.premio_imagen || ""; // 📸 Guardar la URL antes de enviarla
            console.log(`🏆 Imagen final para ${winner.nombre_completo}: ${imageUrl}`); // 🔎 Depurar

            return (
              <motion.div key={winner.id}>
                <WinnerCard
                  name={winner.nombre_completo}
                  prize={winner.premio_titulo || "Premio Desconocido"}
                  image={imageUrl}
                  date={`Fecha: ${winner.sorteo_fecha}`}
                />
              </motion.div>
            );
          })

        ) : (
          <p className="text-center w-full col-span-3 text-gray-600">
            No hay ganadores registrados aún.
          </p>
        )}

      </div>
    </section>
  );
}
