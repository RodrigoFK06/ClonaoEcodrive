"use client"

import type React from "react"

import { motion } from "framer-motion"

export const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

