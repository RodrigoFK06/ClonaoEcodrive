"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/premios", label: "Premios" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/ganadores", label: "Ganadores" },
]

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative min-h-screen">
      <Image
        src="/Portada Inicio.png"
        alt="EcoDrive+ Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/Logo.png"
              alt="EcoDrive+"
              width={200}
              height={200}
              className="rounded"
            />
            <span className="text-xl font-bold text-[#E67E22]"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:text-[#E67E22] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-0 bg-[#E67E22] z-40 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl text-white hover:text-black transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="container mx-auto px-4 h-[calc(130vh-80px)] flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            HAZ DE CADA VIAJE UNA <span className="text-[#E67E22]">OPORTUNIDAD</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#"
              className="bg-[#E67E22] text-white px-8 py-3 rounded-full inline-block
                hover:bg-[#E67E22]/90 transition-colors hover:shadow-lg hover:shadow-[#E67E22]/20"
            >
              Descarga la app
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

