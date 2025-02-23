"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function LoadingMessage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Star className="w-16 h-16 text-[#E67E22] mb-4 animate-pulse" />
      <h3 className="text-2xl font-bold text-[#E67E22] mb-2">¡Estamos actualizando nuestras promociones!</h3>
      <p className="text-gray-600 max-w-md">
        Muy pronto podrás ver todos nuestros increíbles premios y beneficios. ¡Vuelve a visitarnos en unos minutos!
      </p>
    </motion.div>
  )
}

