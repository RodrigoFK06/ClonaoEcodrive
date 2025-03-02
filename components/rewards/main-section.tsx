"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/fade-in";
import TypingAnimation from "../ui/typing-animation";
import { useEffect, useState } from "react";
import type { MainPrize } from "@/types/main-prize";
import { fetchMainPrize } from "@/lib/api-main-prize";
import Header from "../ui/UniversalHeader";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="flex flex-col items-center justify-center w-full animate-pulse">
    {/* Skeleton del título */}
    <div className="bg-gray-700 w-3/4 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 rounded-lg mb-4"></div>

    {/* Skeleton del subtítulo */}
    <div className="bg-gray-600 w-2/3 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded-lg mb-2"></div>
    <div className="bg-gray-600 w-2/3 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded-lg mb-4"></div>

    {/* Skeleton de la nota */}
    <div className="bg-gray-500 w-1/2 h-4 sm:h-6 rounded-lg mb-2"></div>

    {/* Skeleton de la fecha */}
    <div className="bg-gray-500 w-1/3 h-4 sm:h-6 rounded-lg"></div>
  </div>
);

export default function MainSection() {
  const [mainPrize, setMainPrize] = useState<MainPrize | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMainPrize = async () => {
      try {
        setIsLoading(true);
        const response = await fetchMainPrize();
        if (!response.error) {
          setMainPrize(response.data);
        }
      } catch (e) {
        console.error("Error loading main prize:", e);
      } finally {
        setIsLoading(false);
      }
    };

    loadMainPrize();
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de Fondo */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={mainPrize?.imageUrl || "/placeholder.svg"}
          alt="Vista de Malabrigo"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <FadeIn>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          {isLoading ? (
            // 🔥 Skeleton mientras carga
            <SkeletonLoader />
          ) : (
            // 🔥 Datos reales cuando ya cargaron
            <>
              {/* Título */}
              <motion.h1
                className="overflow-show text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 whitespace-normal break-words w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <TypingAnimation text={mainPrize?.title || ""} />
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium w-full whitespace-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {mainPrize?.subtitle}
              </motion.p>

              {/* Detalle */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium w-full whitespace-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {mainPrize?.detail}
              </motion.p>

              {/* Nota y Fecha */}
              <motion.div
                className="absolute bottom-8 left-0 right-0 text-center px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-white/90 text-sm sm:text-base mb-2">{mainPrize?.note}</p>
                <p className="text-white/90 text-sm sm:text-base font-semibold">{mainPrize?.date}</p>
              </motion.div>
            </>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
