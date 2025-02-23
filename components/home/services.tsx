"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Services() {
  return (
    <section className="py-20 bg-[#FDF2E9]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          SERVICIOS OFRECIDOS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src="\2-removebg-preview.png"
              alt="Taxi Service"
              width={400}
              height={400}
              className="w-full"
            />
            <h3 className="text-2xl font-bold text-center mt-4">Taxi</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src="\3-removebg-preview.png"
              alt="Delivery Service"
              width={400}
              height={400}
              className="w-full"
            />
            <h3 className="text-2xl font-bold text-center mt-4">Delivery (próximamente)</h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

