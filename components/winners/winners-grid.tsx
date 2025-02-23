"use client"

import { motion } from "framer-motion"
import WinnerCard from "./winner-card"

interface Winner {
  id: string
  name: string
  prize: string
  image: string
  date: string
}

interface WinnersGridProps {
  title: string
  winners: Winner[]
}

export default function WinnersGrid({ title, winners }: WinnersGridProps) {
  return (
    <section className="mb-12">
      <motion.h2
        className="text-4xl font-bold text-[#E67E22] text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {winners.map((winner, index) => (
          <motion.div
            key={winner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <WinnerCard {...winner} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

