export async function fetchBenefits() {
  try {
    console.log("📡 Solicitando datos de beneficios a /api/beneficios...");

    const response = await fetch("/api/beneficios", {
      cache: "no-store", // 🔥 Evita el almacenamiento en caché
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

    const data = await response.json();

    console.log("✅ Datos recibidos en fetchBenefits:", data);

    if (!response.ok) {
      throw new Error(data.error || "Error al obtener beneficios");
    }

    return Array.isArray(data.beneficios) ? data.beneficios : [];
  } catch (error) {
    console.error("❌ Error en fetchBenefits:", error);
    return [];
  }
}
