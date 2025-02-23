import FlipCard from "../ui/flip-card";

interface BenefitCardProps {
  titulo: string;
  descripcion: string;
  sede: string;
  dias: string;
  imagen?: string;
}

export default function BenefitCard({ titulo, descripcion, sede, dias, imagen }: BenefitCardProps) {
  console.log("🟢 Datos en BenefitCard:", { titulo, descripcion, sede, dias, imagen });

  return (
    <div className="flex items-start gap-8">
      <div className="w-48 h-48 flex-shrink-0">
        <FlipCard 
          title={titulo} 
          description={`${descripcion}\n${sede}\n${dias}`} 
          imageUrl={imagen || "/default-image.jpg"} // Usa una imagen por defecto si está vacía
          size="small" 
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-[#E67E22]">{titulo}</h3>
        <ul className="space-y-2 text-black">
          <li className="flex items-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {descripcion}
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {sede}
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {dias}
          </li>
        </ul>
      </div>
    </div>
  );
}
