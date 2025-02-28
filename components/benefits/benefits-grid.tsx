"use client";

import { motion } from "framer-motion";
import BenefitCard from "./benefit-card";
import LoadingMessage from "../ui/loading-message";

interface Benefit {
  id: number;
  titulo: string;
  descripcion: string;
  sede: string;
  dias: string;
  imagen?: string; // 🔥 Agregar la propiedad imagen (opcional)
}

interface BenefitsGridProps {
  benefits: Benefit[] | null;
  isLoading: boolean;
  error?: string;
}

export default function BenefitsGrid({ benefits, isLoading, error }: BenefitsGridProps) {
  // 🔥 Aquí agregamos el console.log para ver qué datos llegan a este componente
  console.log("📌 Datos recibidos en benefits-grid.tsx:", benefits);

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  const validBenefits = Array.isArray(benefits) ? benefits : [];

  if (validBenefits.length === 0) {
    return <p className="text-center text-gray-500">No hay beneficios disponibles en este momento.</p>;
  }

  return (
    <section className="py-16 container mx-auto px-4 bg-[#FFF5E9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-[#E67E22] tracking-wider">¡BENEFICIOS PARA TODOS!</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
        {validBenefits.map((benefit, index) => {
          console.log("🔹 Renderizando beneficio:", benefit);

          // Verificar si la imagen está definida
          if (!benefit.imagen) {
            console.warn(`⚠️ La imagen del beneficio ${benefit.titulo} está vacía o indefinida.`);
          }

          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BenefitCard
                titulo={benefit.titulo}
                descripcion={benefit.descripcion}
                sede={benefit.sede}
                dias={benefit.dias}
                imagen={benefit.imagen || "/default-image.jpg"} // Si no hay imagen, usa una por defecto
              />
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
