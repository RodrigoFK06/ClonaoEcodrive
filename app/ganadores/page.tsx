"use client";

import { useState } from "react";
import WinnersHero from "@/components/winners/winners-hero";
import MainPrizeWinner from "@/components/winners/main-prize-winner";
import WeeklyCalendar from "@/components/winners/weekly-calendar";
import WinnersGrid from "@/components/winners/winners-grid";
import WinnersCTA from "@/components/winners/winners-cta";

export default function WinnersPage() {
  // 🔥 Estado para almacenar la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <main className="min-h-screen">
      <WinnersHero />
      <div className="bg-[#FFF5E9] pt-16">
        <div className="font-black container mx-auto px-4 py-12">
          <MainPrizeWinner />

          {/* 📅 Ahora WeeklyCalendar notificará la fecha seleccionada */}
          <WeeklyCalendar onDateSelect={setSelectedDate} />

          {/* 🚀 WinnersGrid se actualizará dinámicamente según la fecha seleccionada */}
          <WinnersGrid title="CONDUCTORES GANADORES" tipo="conductor" selectedDate={selectedDate} />
          <WinnersGrid title="PASAJEROS GANADORES" tipo="pasajero" selectedDate={selectedDate} />

          <WinnersCTA />
        </div>
      </div>
    </main>
  );
}
