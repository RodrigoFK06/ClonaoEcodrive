"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import UniversalHeader from "@/components/ui/UniversalHeader";

const navLinks = [
  { href: "/premios", label: "Premios" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/ganadores", label: "Ganadores" },
];

export function HomeHeader() {
  return (
    <header className="relative min-h-screen font-nunito"> {/* Agrega font-nunito */}
      <UniversalHeader />
      <Image
        src="/Portada Inicio.png"
        alt="EcoDrive+ Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-xl font-bold text-[#E67E22]"></span>
          </Link>
        </nav>
        <div className="container mx-auto px-4 absolute left-10 h-[calc(130vh-80px)] flex flex-col justify-center">
          {/* Aplica font-black aquí */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight text-left" // Cambiado a font-black
          >
            HAZ DE CADA VIAJE UNA <br /> 
            <span className="text-[#E67E22]"> OPORTUNIDAD</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Aplica font-black al botón */}
            <Link
              href="#"
              className="text-xl font-black bg-[#E67E22] text-black/90 px-12 py-3 rounded-full inline-block
                hover:bg-[#E67E22]/90 transition-colors hover:shadow-lg hover:shadow-[#E67E22]/20"
            >
              Descarga la app
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}