"use client";

import { useEffect, useState } from "react";
import { fetchBenefits } from "@/lib/api-benefits";
import BenefitsHero from "@/components/benefits/benefits-hero";
import BenefitsGrid from "@/components/benefits/benefits-grid";
import BenefitsCTA from "@/components/benefits/benefits-cta";

export default function BenefitsPage() {
  const [benefits, setBenefits] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const loadBenefits = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBenefits();

        console.log("✅ Datos finales en page.tsx (actualizados):", data);

        if (!Array.isArray(data)) {
          throw new Error("La API no devolvió un array");
        }

        setBenefits(data);
      } catch (e) {
        setError("Error al cargar los beneficios");
      } finally {
        setIsLoading(false);
      }
    };

    loadBenefits();

    // 🔥 Configurar actualización automática cada 30 segundos
    const interval = setInterval(loadBenefits, 30000);

    return () => clearInterval(interval); // 🔄 Limpieza del intervalo al desmontar el componente
  }, []);

  return (
    <main className="min-h-screen">
      <BenefitsHero />
      <div className="bg-[#FFF5E9] pt-16">
        <BenefitsGrid benefits={benefits} isLoading={isLoading} error={error} />
        <BenefitsCTA />
      </div>
    </main>
  );
}
