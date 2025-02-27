"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MainPrizeWinner() {
  return (
    <section className="mb-12">
      <motion.h2
        className="text-4xl font-black text-[#E67E22] text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¡GRAN PREMIO DEL MES!
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          className="relative w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png"
            alt="Vista de Malabrigo"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="md:w-1/2">
          <motion.h3
            className="text-3xl font-black text-[#E67E22] mb-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            VIAJE A MALABRIGO
          </motion.h3>
          <motion.ul
            className="space-y-2 mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <li>• 3D y 2N</li>
            <li>• 2 personas</li>
            <li>Fecha: 30 de Marzo</li>
          </motion.ul>
          <div className="space-y-4">
            <motion.div
              className="bg-[#E67E22] rounded-xl p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              GANADOR 1: NOMBRE DEL GANADOR(A)
            </motion.div>
            <motion.div
              className="bg-[#E67E22] rounded-xl p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              GANADOR 2: NOMBRE DEL GANADOR(A)
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

