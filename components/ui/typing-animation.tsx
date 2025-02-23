"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export default function TypingAnimation({ text }: { text: string }) {
  const controls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      })

      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${(i * 100) / text.length}%`,
          transition: { duration: 0.05 },
        })
      }
    }

    animate()
  }, [controls, text])

  return (
    <div className="relative">
      <motion.div initial={{ opacity: 0, width: "0%" }} animate={controls} className="" />
      <span>{text}</span>
    </div>
  )
}

