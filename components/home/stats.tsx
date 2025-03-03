/* "use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

type StatProps = {
  end: number
  label: string
  suffix?: string
  duration?: number
}

function StatCounter({ end, label, suffix = "", duration = 2 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-[#E67E22]">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="py-20 bg-[#FDF2E9]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCounter end={1000} label="Usuarios activos" suffix="+" />
          <StatCounter end={10000} label="Viajes completados" suffix="+" />
          <StatCounter end={90} label="Satisfacción" suffix="%" />
          <StatCounter end={24} label="Soporte" suffix="/7" />
        </div>
      </div>
    </section>
  )
}
*/
