"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/fade-in";
import TypingAnimation from "../ui/typing-animation";
import { useEffect, useState } from "react";
import type { MainPrize } from "@/types/main-prize";
import { fetchMainPrize } from "@/lib/api-main-prize";

export default function MainPrize() {
  const [mainPrize, setMainPrize] = useState<MainPrize>({
    title: "¡GRAN PREMIO DEL MES!",
    subtitle: "2 Viajes a Malabrigo 3D/2N",
    detail: "(2 personas todo pagado)",
    note: "Nota: La entrega del premio será para conductor y pasajero",
    date: "Fecha: 30 de Marzo",
    imageUrl: "/placeholder.svg",
  });
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
        console.error("❌ Error loading main prize:", e);
      } finally {
        setIsLoading(false);
      }
    };

    loadMainPrize();
  }, []);

  return (
    <section className="relative min-h-screen">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={mainPrize.imageUrl || "/placeholder.svg"}
          alt="Vista del Gran Premio"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/30" />
      <FadeIn>
        <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <TypingAnimation text={mainPrize.title} />
          </motion.h1>
          <motion.div
            className="text-white text-2xl md:text-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {mainPrize.subtitle.split("\n").map((line, index) => (
              <p key={index} className="mb-2">
                {line}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-white/90 text-sm mb-2">{mainPrize.note}</p>
            <p className="text-white/90 text-sm">{mainPrize.date}</p>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
