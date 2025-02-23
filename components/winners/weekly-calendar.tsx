"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function WeeklyCalendar() {
  const days = [
    { day: "LUN", date: "03", active: true },
    { day: "MAR", date: "04" },
    { day: "MIE", date: "05" },
    { day: "JUE", date: "06" },
    { day: "VIE", date: "07" },
    { day: "SAB", date: "08" },
    { day: "DOM", date: "09" },
  ]

  return (
    <div className="flex justify-center gap-4 mb-16">
      {days.map((day, index) => (
        <motion.div
          key={day.day}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Star className={`w-8 h-8 mb-2 ${day.active ? "text-[#E67E22] fill-[#E67E22]" : "text-[#E67E22]"}`} />
          <div className="text-center text-[#E67E22]">
            <div className="font-bold">{day.day}</div>
            <div>{day.date}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

