"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FlipCard from "../ui/flip-card";
import { Star } from "lucide-react";

export function MissionVision() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <section className="py-20 bg-[#FDF2E9] font-nunito">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Image src="/Estrella_svg.svg" alt="Estrella" width={70} height={70} />
        </div>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            layout
            className="flex flex-col items-center"
          >
            {/* Aplica ajustes aquí */}
            <h2 className="text-4xl font-black mb-8 leading-tight">
              {/* Cambiado a font-black */}
              MISIÓN
            </h2>
            <div className="w-full max-w-lg relative h-[400px] overflow-hidden rounded-2xl">
              <FlipCard
                title="Nuestra Misión"
                description="Desarrollar tecnologías que optimicen los recursos y mejoren la calidad de vida de nuestros conductores y pasajeros."
                imageUrl="/Misión.png"
                size="full"
              />
            </div>
          </motion.div>
          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            layout
            className="flex flex-col items-center"
          >
            {/* Aplica ajustes aquí */}
            <h2 className="text-4xl font-black mb-8 leading-tight">
              VISIÓN
            </h2>
            <div className="w-full max-w-lg relative h-[400px] overflow-hidden rounded-2xl">
              <FlipCard
                title="Nuestra Visión"
                description="Ser la plataforma líder en movilidad sostenible, creando un impacto positivo en la sociedad y el medio ambiente."
                imageUrl="/Visión.png"
                size="full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}