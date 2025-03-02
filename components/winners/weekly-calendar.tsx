"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const getMonthName = (date: Date): string => {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  return meses[date.getMonth()];
};

const getMondayOfWeek = (date: Date): Date => {
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Si es domingo, ir al lunes anterior
  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);
  return monday;
};

export default function WeeklyCalendar({ onDateSelect }: { onDateSelect: (date: string) => void }) {
  const today = new Date();
  const [weekStart, setWeekStart] = useState<Date>(getMondayOfWeek(today));
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  useEffect(() => {
    setSelectedDate(today);
    onDateSelect(formatDate(today)); // Enviar la fecha inicial al WinnersGrid
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan en 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getWeekDays = (start: Date): Date[] => {
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      return day;
    });
  };

  const weekDays = getWeekDays(weekStart);

  const nextWeek = () => {
    const nextMonday = new Date(weekStart);
    nextMonday.setDate(nextMonday.getDate() + 7);

    if (nextMonday.getMonth() === today.getMonth()) {
      setWeekStart(nextMonday);
    }
  };

  const prevWeek = () => {
    const prevMonday = new Date(weekStart);
    prevMonday.setDate(prevMonday.getDate() - 7);

    if (prevMonday.getMonth() === today.getMonth()) {
      setWeekStart(prevMonday);
    }
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(formatDate(date)); // Filtrar ganadores por esta fecha
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.h2
        className="text-3xl font-bold bg-gradient-to-r from-[#E67E22] to-[#F39C12] bg-clip-text text-transparent mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Premios de {getMonthName(weekStart)}
      </motion.h2>

      <div className="flex justify-between items-center mb-6">
        <motion.button
          onClick={prevWeek}
          disabled={weekDays[0].getDate() <= 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-[#E67E22]/20 text-[#E67E22] hover:bg-[#E67E22]/30"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* 📌 Agregar overflow y flex para mejorar responsive */}
        <div className="w-full overflow-x-auto px-2">
          <div className="flex gap-2 justify-center min-w-max overflow-hidden">
            <LayoutGroup>
              <AnimatePresence mode="popLayout">
                {weekDays.map((day) => (
                  <motion.div
                    key={day.toISOString()}
                    className={`flex flex-col items-center p-3 md:p-4 rounded-lg cursor-pointer min-w-[50px] md:min-w-[80px] transition-all
                  ${selectedDate.toDateString() === day.toDateString()
                        ? "bg-[#E67E22] text-white shadow-lg scale-105"
                        : "hover:bg-[#FDEBD0]"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => selectDate(day)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layout
                  >
                    <motion.div className="mb-2">
                      <Star
                        className="w-6 h-6 md:w-8 md:h-8"
                        fill={selectedDate.toDateString() === day.toDateString() ? "currentColor" : "none"}
                      />
                    </motion.div>

                    <div className="text-center text-sm md:text-base">
                      <div className="font-medium">
                        {day.toLocaleDateString("es-ES", { weekday: "short" }).toUpperCase()}
                      </div>
                      <div className="text-lg font-bold">{day.getDate()}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </div>

        <motion.button
          onClick={nextWeek}
          disabled={weekDays[6].getMonth() !== today.getMonth()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-[#E67E22]/20 text-[#E67E22] hover:bg-[#E67E22]/30"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>

  );
}
