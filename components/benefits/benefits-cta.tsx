"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function BenefitsCTA() {
  return (
    <section className="py-8 container mx-auto px-4">
      
    </section>
  )
}

/*
"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function BenefitsCTA() {
  return (
    <section className="py-8 container mx-auto px-4">
      <motion.div
        className="bg-[#E67E22] rounded-2xl flex items-center justify-between py-4 px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl font-bold text-black">ÚNETE A ECODRIVE+ Y SÉ PARTE DE TODOS ESTOS BENEFICIOS</p>
        <motion.button
          className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-black/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Star className="w-5 h-5" />
          Descargar EcoDrive+
        </motion.button>
      </motion.div>
    </section>
  )
}

*/
