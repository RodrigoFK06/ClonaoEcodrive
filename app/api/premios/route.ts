import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("📡 Llamando a la API de premios en CodeIgniter...");

    const res = await fetch("http://localhost:8080/admin/premios", {
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error en la API de premios: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    console.log("✅ Datos recibidos en route.ts (premios):", data);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("❌ Error en route.ts de premios:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error desconocido" },
      { status: 500 }
    );
  }
}
