export const fallbackRewards = {
  driverRewards: [
    {
      id: "1",
      titulo: "RECARGA WALLET",
      dia: "Lunes y Jueves",
      imagen: "/default-image.jpg",
      descripcion: "Recibe saldo en tu cuenta para viajes.", // 👈 Agregado
      tipo: "conductor",
    },
  ],
  passengerRewards: [
    {
      id: "2",
      titulo: "DESAYUNO GRATIS",
      dia: "Martes y Viernes",
      imagen: "/default-image.jpg",
      descripcion: "Un desayuno completo sin costo.", // 👈 Agregado
      tipo: "pasajero",
    },
  ],
};

export const fallbackWinners = {
  currentWeek: "Semana 10",
  monthlyPrize: {
    title: "Viaje a Cancún",
    imageUrl: "/placeholder.svg",
  },
  winnersList: [
    {
      id: "1",
      sorteo_titulo: "Sorteo Conductores - Marzo",
      sorteo_fecha: "2025-03-10",
      nombre_completo: "Carlos Pérez",
      tipo: "conductor", // 🔥 Añadir el tipo
      premio_titulo: "Tarjeta de Combustible",
      premio_imagen: "/placeholder.svg",
      es_ganador: "1",
    },
    {
      id: "2",
      sorteo_titulo: "Sorteo Pasajeros - Marzo",
      sorteo_fecha: "2025-03-12",
      nombre_completo: "Ana Torres",
      tipo: "pasajero", // 🔥 Añadir el tipo
      premio_titulo: "Cena en Restaurante",
      premio_imagen: "/placeholder.svg",
      es_ganador: "1",
    },
  ],
};


