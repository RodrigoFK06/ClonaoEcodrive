import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://tu-api-codeigniter.com/api/premios');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    // Verificamos si el error es una instancia de Error
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
