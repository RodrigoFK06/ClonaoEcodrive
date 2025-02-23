import type { MainPrizeResponse } from "@/types/main-prize";
import { fetchFromApi } from "./api";

const fallbackMainPrize: MainPrizeResponse = {
  title: "¡GRAN PREMIO DEL MES!",
  subtitle: "2 Viajes a Malabrigo 3D/2N\n(2 personas todo pagado)",
  note: "Nota: La entrega del premio será para conductor y pasajero",
  date: "Fecha: 30 de Marzo",
  imageUrl: "/Portada Premios.svg",
  data: {
    title: "Premio Secundario",
    subtitle: "Viaje a la playa",
    note: "Nota: Premio para dos personas",
    date: "Fecha: 15 de Abril",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-MxfnQwYd5biTfe7wGrW7q6qS8eAN7C.png"
  }
};

export async function fetchMainPrize(): Promise<{ data: MainPrizeResponse; error?: string }> {
  return fetchFromApi("main-prize", fallbackMainPrize);
}
