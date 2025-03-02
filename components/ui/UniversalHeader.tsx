"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/premios", label: "Premios" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/ganadores", label: "Ganadores" },
];

export default function UniversalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Cierra el menú al hacer scroll
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 sm:px-8 md:px-4 bg-transparent">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image src="/Logo.png" alt="EcoDrive+" width={200} height={200} className="rounded" />
          <span className="text-xl font-bold text-[#E67E22]"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium ${pathname === link.href ? "text-[#E67E22]" : "text-white"
                } hover:text-[#E67E22]`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
            <div
              className="fixed inset-0 z-40 md:hidden bg-black/50"
              onClick={() => setIsMenuOpen(false)} // Cierra si se toca fuera
            >
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute top-0 right-0 w-4/5 h-screen bg-[#E67E22]/90 shadow-lg"
                onClick={(e) => e.stopPropagation()} // Evita cierre si se toca dentro
              >
                <div className="flex flex-col items-center justify-center h-full gap-4">
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
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
