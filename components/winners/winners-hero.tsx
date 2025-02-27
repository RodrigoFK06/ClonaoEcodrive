"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WinnersHero() {
  return (
    <section className="relative h-screen">
      <Image
        src="\Portada Ganadores.png"
        alt="Familia feliz celebrando"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-black text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡GANADORES
          <br />
          DE ESTA SEMANA!
        </motion.h1>
        <motion.p
          className="font-bold text-xl md:text-2xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Si sale tu nombre comunícate con
          <br />
          nosotros para recibir tus premios.
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ¡Recuerda que tienes una semana para reclamarlos!
        </motion.p>
        <motion.div
          className="absolute bottom-8 w-full flex justify-between items-center text-white/80 text-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Nota: La entrega de los premios se harán conforme a los Términos y condiciones de EcoDrive+</p>
          <p>Semana: 03 de Marzo - 09 de Marzo</p>
        </motion.div>
      </div>
    </section>
  )
}

