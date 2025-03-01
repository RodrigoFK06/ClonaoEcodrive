import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/config";

export async function GET() {
  try {
    console.log("📡 Llamando a la API de ganadores en CodeIgniter...");

    const res = await fetch(`${API_BASE_URL}/admin/ganadores`, {
      cache: "no-store",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error en la API de ganadores: ${res.status} - ${res.statusText}`);
    }

    const jsonResponse = await res.json();
    console.log("🔍 Respuesta de la API:", jsonResponse);

    // Verificamos si la API devuelve el campo "data"
    if (!jsonResponse || !Array.isArray(jsonResponse.data)) {
      throw new Error("La API no devolvió una lista de ganadores válida.");
    }

    // Extraemos solo la lista de ganadores
    const ganadores = jsonResponse.data;

    console.log("✅ Lista de ganadores procesada:", ganadores);

    return NextResponse.json(ganadores, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

  } catch (error) {
    console.error("❌ Error en route.ts de ganadores:", error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error desconocido" },
      { status: 500 }
    );
  }
}
