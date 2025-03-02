import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/config";

export async function GET() {
  try {
    console.log("📡 Llamando a la API de multimedia en CodeIgniter...");

    const res = await fetch(`${API_BASE_URL}/admin/multimedia`, {
      cache: "no-store",
      headers: { "Accept": "application/json" }, // 👈 Clave para obtener JSON
    });

    if (!res.ok) {
      throw new Error(`Error en la API de multimedia: ${res.status}`);
    }

    const data = await res.json();

    console.log("✅ Datos recibidos en route.ts (multimedia):", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error en route.ts de multimedia:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error desconocido" },
      { status: 500 }
    );
  }
}