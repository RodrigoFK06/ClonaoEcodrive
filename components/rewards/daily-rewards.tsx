import { Star } from "lucide-react"
import Image from 'next/image'

export default function DailyRewards() {
  return (
    <section className="py-16 container mx-auto text-center px-4 font-nunito">
      <div className="flex justify-center mb-8">
        <Image src="/Estrella_svg.svg" alt="Estrella" width={70} height={70} />
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-[#E67E22] mb-4">¡PREMIOS DIARIOS!</h2>
      <p className="text-lg max-w-2xl mx-auto font-black">
        Cada recorrido te acerca a grandes recompensas.
        <br />
        Viaja con EcoDrive+ y gana mientras te mueves.
      </p>
    </section>
  )
}

