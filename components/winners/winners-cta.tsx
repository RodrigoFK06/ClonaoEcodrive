"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function WinnersCTA() {
  return (
    <motion.div
  
    >
      
      <motion.button

      >


      </motion.button>
    </motion.div>
  )
}

/*
"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function WinnersCTA() {
  return (
    <motion.div
      className="bg-[#E67E22] rounded-full flex items-center justify-between py-3 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-bold text-black">TÚ PUEDES SER EL PRÓXIMO GANADOR. ¡PREMIAMOS TU ELECCIÓN!</p>
      <motion.button
        className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-black/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Star className="w-5 h-5" />
        Descargar EcoDrive+
      </motion.button>
    </motion.div>
  )
}

*/