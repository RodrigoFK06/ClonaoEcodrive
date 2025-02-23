"use client"

import { motion } from "framer-motion"

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-gray-200 rounded-2xl p-3 h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <div className="bg-gray-300 w-full h-32 rounded-xl mb-2" />
          <div className="bg-gray-300 w-3/4 h-4 rounded mb-1" />
          <div className="bg-gray-300 w-1/2 h-3 rounded" />
        </motion.div>
      ))}
    </div>
  )
}

