"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Winner {
  id: string;
  sorteo_titulo: string;
  sorteo_fecha: string;
  nombre_completo: string;
  tipo: string;
  premio_titulo: string | null;
  tipo_premio: string | null;
  premio_imagen: string | null;
  es_ganador: string;
}

export default function MainPrizeWinner() {
  const [mainPrize, setMainPrize] = useState<Winner | null>(null);
  const [winners, setWinners] = useState<Winner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMainPrize = async () => {
      try {
        const response = await fetch("/api/ganadores"); // Asegúrate de que esta URL es correcta
        const result = await response.json();

        console.log("📡 API Response:", result);

        // 🔍 Verifica que la respuesta es un array
        if (!Array.isArray(result)) {
          throw new Error("Formato de datos inválido (se esperaba un array)");
        }

        const today = new Date();
        const currentMonth = today.getMonth() + 1; // Marzo → 3
        const currentYear = today.getFullYear(); // 2025

        // 🔍 Filtrar solo los premios del tipo "gran premio" en el mes actual
        const grandPrizeWinners = result.filter(
          (winner: Winner) =>
            winner.tipo_premio === "gran premio" &&
            new Date(winner.sorteo_fecha).getMonth() + 1 === currentMonth &&
            new Date(winner.sorteo_fecha).getFullYear() === currentYear
        );

        console.log("🎯 Ganadores del Gran Premio:", grandPrizeWinners);

        if (grandPrizeWinners.length === 0) {
          console.warn("⚠️ No hay gran premio registrado este mes.");
          setIsLoading(false);
          return;
        }

        // 🔥 Tomamos el premio más reciente del mes actual
        const latestPrize = grandPrizeWinners[0];
        setMainPrize(latestPrize);

        // 🏆 Seleccionar solo los primeros 2 ganadores
        setWinners(grandPrizeWinners.slice(0, 2));
      } catch (error) {
        console.error("❌ Error al cargar el gran premio:", error);
      } finally {
        setIsLoading(false);
      }
    };



    fetchMainPrize();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-500">Cargando gran premio...</p>;
  }

  if (!mainPrize) {
    return (
      <p className="text-center text-gray-500">
        Aún no hay un Gran Premio registrado este mes.
      </p>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-black text-[#E67E22] text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¡GRAN PREMIO DEL MES!
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center bg-[#FFF5E9] p-8 rounded-xl shadow-lg">
        {/* 🖼 Imagen del premio */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2 md:h-[400px] flex items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={mainPrize.premio_imagen ? `https://mediumaquamarine-goat-867388.hostingersite.com/${mainPrize.premio_imagen}` : "/placeholder.svg"}
            alt={mainPrize.premio_titulo || "Premio desconocido"}
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </motion.div>

        {/* 🏆 Detalles del Premio */}
        <motion.div
          className="flex-1 text-center md:text-left md:pl-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-[#E67E22] mb-4">
            {mainPrize.premio_titulo || "Premio desconocido"}
          </h3>

          <ul className="text-lg text-gray-700 mb-4">
            <li>🏅 Fecha: {new Date(mainPrize.sorteo_fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long" })}</li>
            <li>📌 Categoría: {mainPrize.tipo_premio || "No especificado"}</li>
          </ul>

          {/* 🏅 Lista de ganadores */}
          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              className="bg-[#E67E22] text-white py-3 px-6 rounded-lg mb-2 text-lg font-bold shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {`GANADOR ${index + 1}: ${winner.nombre_completo}`}
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
