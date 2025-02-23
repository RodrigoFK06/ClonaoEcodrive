import WinnersHero from "@/components/winners/winners-hero"
import MainPrizeWinner from "@/components/winners/main-prize-winner"
import WeeklyCalendar from "@/components/winners/weekly-calendar"
import WinnersGrid from "@/components/winners/winners-grid"
import WinnersCTA from "@/components/winners/winners-cta"

export default function WinnersPage() {
  return (
    <main className="min-h-screen">
      <WinnersHero />
      <div className="bg-[#FFF5E9] pt-16">
        <div className="container mx-auto px-4 py-12">
          <MainPrizeWinner />
          <WeeklyCalendar />
          <WinnersGrid
            title="CONDUCTORES GANADORES"
            winners={[
              {
                id: "1",
                name: "NOMBRE DEL GANADOR(A)",
                prize: "RECARGA WALLET",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png",
                date: "Día: Lunes 03",
              },
              {
                id: "2",
                name: "NOMBRE DEL GANADOR(A)",
                prize: "LAVADO DE AUTO",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png",
                date: "Día: Lunes 03",
              },
              {
                id: "3",
                name: "NOMBRE DEL GANADOR(A)",
                prize: "RECARGA COMBUSTIBLE",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png",
                date: "Día: Lunes 03",
              },
            ]}
          />
          <WinnersGrid
            title="PASAJEROS GANADORES"
            winners={[
              {
                id: "4",
                name: "NOMBRE DEL GANADOR(A)",
                prize: "RECARGA WALLET",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png",
                date: "Día: Lunes 03",
              },
              {
                id: "5",
                name: "NOMBRE DEL GANADOR(A)",
                prize: "ENTRADA + COMBO CINE",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png",
                date: "Día: Lunes 03",
              },
              {
                id: "6",
                name: "NOMBRE DEL GANADOR(A)",
                prize: "CENA SANTORINI",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9LpytokgmeKq4vOD9NLoaNDOheGvba.png",
                date: "Día: Lunes 03",
              },
            ]}
          />
          <WinnersCTA />
        </div>
      </div>
    </main>
  )
}

