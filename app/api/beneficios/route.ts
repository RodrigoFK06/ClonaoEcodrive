import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("📡 Llamando a la API de CodeIgniter...");

    const res = await fetch('http://localhost:8080/admin/beneficios', {
      cache: "no-store", // 🔥 Evita el almacenamiento en caché
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log("✅ Datos recibidos en route.ts:", data);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("❌ Error en route.ts:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error desconocido" },
      { status: 500 }
    );
  }
}
