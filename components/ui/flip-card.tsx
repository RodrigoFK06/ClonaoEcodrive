"use client"

import type React from "react"

import { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import Image from "next/image"

interface FlipCardProps {
  title: string
  description: string
  imageUrl: string
  winnerName?: string
  size?: "small" | "medium" | "large" | "full"
}

export default function FlipCard({ title, description, imageUrl, winnerName, size = "large" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  const springConfig = { stiffness: 300, damping: 30 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = (mouseX / width - 0.5) * 2
    const yPct = (mouseY / height - 0.5) * 2
    x.set(xPct * 100)
    y.set(yPct * 100)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sizeClasses = {
    small: "w-48 h-48",
    medium: "w-64 h-64",
    large: "w-full aspect-square",
    full: "w-full h-full",
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} cursor-pointer perspective`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
      }}
      whileHover={{ scale: 1.02 }}
      onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
      tabIndex={0}
      role="button"
      aria-label={isFlipped ? "Ver imagen" : "Ver descripción"}
    >
      <motion.div
        className="w-full h-full relative preserve-3d shadow-xl rounded-3xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
      >
        {/* Cara frontal */}
        <div
          className={`absolute w-full h-full backface-hidden bg-[#FFF5E9] rounded-3xl overflow-hidden ${
            isFlipped ? "pointer-events-none" : ""
          }`}
          aria-hidden={isFlipped}
        >
          {winnerName && (
            <div className="absolute top-0 left-0 right-0 bg-[#E67E22] text-black text-center py-2 z-10 mx-auto w-4/5 rounded-b-xl">
              {winnerName}
            </div>
          )}
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover rounded-3xl" priority />
        </div>

        {/* Cara trasera */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white rounded-3xl p-6 flex flex-col justify-center ${
            !isFlipped ? "pointer-events-none" : ""
          }`}
          style={{ transform: "rotateY(180deg)" }}
          aria-hidden={!isFlipped}
        >
          {winnerName && (
            <div className="absolute top-0 left-0 right-0 bg-[#E67E22] text-black text-center py-2 z-10 mx-auto w-4/5 rounded-b-xl">
              {winnerName}
            </div>
          )}
          <div className="transform rotate-0 mt-12">
            <h3 className="text-[#E67E22] text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 text-sm mb-6 whitespace-pre-line">{description}</p>
            <button
              className="bg-[#E67E22] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#E67E22]/90 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setIsFlipped(false)
              }}
            >
              Ver imagen
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

