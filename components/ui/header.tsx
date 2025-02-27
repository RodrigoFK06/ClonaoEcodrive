"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/Logo.png"
              alt="EcoDrive+"
              width={200}
              height={200}
              className="rounded"
            />
            <span className="text-xl font-black text-[#E67E22]"></span>
          </Link>

        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/premios"
                className={`transition-colors font-medium ${
                  pathname === "/" ? "text-[#E67E22]" : "text-white"
                } hover:text-[#E67E22]`}
              >
                Premios
              </Link>
            </li>
            <li>
              <Link
                href="/beneficios"
                className={`transition-colors font-medium ${
                  pathname === "/beneficios" ? "text-[#E67E22]" : "text-white"
                } hover:text-[#E67E22]`}
              >
                Beneficios
              </Link>
            </li>
            <li>
              <Link
                href="/ganadores"
                className={`transition-colors font-medium ${
                  pathname === "/ganadores" ? "text-[#E67E22]" : "text-white"
                } hover:text-[#E67E22]`}
              >
                Ganadores
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

