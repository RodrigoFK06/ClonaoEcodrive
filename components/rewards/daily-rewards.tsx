import { Star } from "lucide-react"

export default function DailyRewards() {
  return (
    <section className="py-16 container mx-auto text-center px-4">
      <Star className="w-16 h-16 text-[#E67E22] mx-auto mb-6" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#E67E22] mb-4">¡PREMIOS DIARIOS!</h2>
      <p className="text-lg max-w-2xl mx-auto">
        Cada recorrido te acerca a grandes recompensas.
        <br />
        Viaja con EcoDrive+ y gana mientras te mueves.
      </p>
    </section>
  )
}

