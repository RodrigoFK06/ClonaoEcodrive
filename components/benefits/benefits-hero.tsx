"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BenefitsHero() {
  return (
    <section className="relative h-screen">
      <Image
        src="\Portada Beneficios.png"
        alt="Personas disfrutando en la playa"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30 font-nunito" />
      <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-black text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BENEFICIOS EXCLUSIVOS
        </motion.h1>
        <motion.p
          className="font-bold text-xl md:text-2xl text-white mb-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Por ser parte de la familia EcoDrive+ recibe beneficios y descuentos en muchas marcas y empresas autorizadas
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ¡Sé parte de esta gran familia!
        </motion.p>
        <motion.p
          className="absolute bottom-8 text-white/80 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Nota: Para recibir tus beneficios debes mostrar a la empresa tu perfil en la app de EcoDrive+
        </motion.p>
      </div>
    </section>
  )
}

