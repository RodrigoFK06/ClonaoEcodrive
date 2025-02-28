import WinnersHero from "@/components/winners/winners-hero";
import MainPrizeWinner from "@/components/winners/main-prize-winner";
import WeeklyCalendar from "@/components/winners/weekly-calendar";
import WinnersGrid from "@/components/winners/winners-grid";
import WinnersCTA from "@/components/winners/winners-cta";

export default function WinnersPage() {
  return (
    <main className="min-h-screen">
      <WinnersHero />
      <div className="bg-[#FFF5E9] pt-16">
        <div className="font-black container mx-auto px-4 py-12">
          <MainPrizeWinner />
          <WeeklyCalendar />

          {/* 🚀 Ahora WinnersGrid se carga dinámicamente con datos de la API */}
          <WinnersGrid title="CONDUCTORES GANADORES" tipo="conductor" />
          <WinnersGrid title="PASAJEROS GANADORES" tipo="pasajero" />

          <WinnersCTA />
        </div>
      </div>
    </main>
  );
}
