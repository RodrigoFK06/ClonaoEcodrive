"use client"

import { motion } from "framer-motion"

export default function BenefitsSkeletonLoader() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-8 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="relative w-48 h-48 rounded-3xl overflow-hidden flex-shrink-0 bg-gray-200" />
          <div className="flex flex-col gap-3 flex-grow">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-full" />
              <div className="h-6 bg-gray-200 rounded w-2/3" />
              <div className="h-6 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

