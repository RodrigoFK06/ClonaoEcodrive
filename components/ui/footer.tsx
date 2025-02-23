import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/placeholder.svg" alt="EcoDrive+" width={40} height={40} className="rounded" />
          <span className="text-xl font-bold text-[#E67E22]">ECODRIVE+</span>
        </Link>

        <div className="flex gap-6">
          <Link href="#" className="hover:text-[#E67E22] transition-colors">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:text-[#E67E22] transition-colors">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:text-[#E67E22] transition-colors">
            <Twitter className="w-6 h-6" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
          <Link href="#" className="hover:text-[#E67E22] transition-colors">
            Términos y Condiciones
          </Link>
          <span className="hidden md:inline">|</span>
          <a href="mailto:soporte@ecodriveplus.com" className="hover:text-[#E67E22] transition-colors">
            Soporte: soporte@ecodriveplus.com
          </a>
        </div>
      </div>
    </footer>
  )
}

