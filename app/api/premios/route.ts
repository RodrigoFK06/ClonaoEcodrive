import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Asegúrate de que la URL es la correcta y accesible
    const res = await fetch('http://localhost:8080/admin/premios', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Error en la API: ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error desconocido" },
      { status: 500 }
    );
  }
}
