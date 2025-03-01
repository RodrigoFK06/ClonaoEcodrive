import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="EcoDrive+" width={200} height={40} className="rounded" />
          
        </Link>

        <div className="flex gap-6">
          <Link href="https://www.facebook.com/profile.php?id=61566893626187" className="hover:text-[#E67E22] transition-colors " target="_blank" 
  rel="noopener noreferrer">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com/ecodriveplus" className="hover:text-[#E67E22] transition-colors" target="_blank" 
  rel="noopener noreferrer">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="https://x.com/EcoDrivePlus" className="hover:text-[#E67E22] transition-colors" target="_blank" 
  rel="noopener noreferrer">
            <Twitter className="w-6 h-6" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
          <Link href="https://drive.google.com/file/d/18VNFqNgXf0RE6e9RQHMc0wclC4pPlFji/view" className="hover:text-[#E67E22] transition-colors" target="_blank" 
  rel="noopener noreferrer">
            Términos y Condiciones
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScauXMr3ZmmUu1K1Wloxq2yzT_CFURVnbKsr-7lkq0QI0SbFQ/viewform" className="hover:text-[#E67E22] transition-colors" target="_blank" 
  rel="noopener noreferrer">
            Libro de Reclamaciones
          </Link>
          <span className="hidden md:inline">|</span>
          <a href="mailto:lrodriguez@ecodriveplus.com" className="hover:text-[#E67E22] transition-colors">
            Soporte: lrodriguez@ecodriveplus.com
          </a>
        </div>
      </div>
    </footer>
  )
}

