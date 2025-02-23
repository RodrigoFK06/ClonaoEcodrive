"use client"

import type React from "react"

import { motion } from "framer-motion"

export const SlideIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

