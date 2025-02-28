export interface Winner {
  id: string;
  sorteo_titulo: string; // 🔥 Ahora usamos el título del sorteo
  sorteo_fecha: string;   // 🔥 Fecha del sorteo
  nombre_completo: string; // 🔥 Nombre del ganador
  tipo: string; // 🔥 Tipo de ganador (conductor/pasajero)
  premio_titulo: string | null; // 🔥 Nombre del premio (puede ser null)
  premio_imagen: string | null; // 🔥 Imagen del premio (puede ser null)
  es_ganador: string; // 🔥 Indica si es ganador ("0" o "1" en la API)
}

export interface MonthlyPrize {
  title: string;
  imageUrl: string;
}

export interface WinnersApiResponse {
  currentWeek: string;
  monthlyPrize: MonthlyPrize;
  winnersList: Winner[];
}
