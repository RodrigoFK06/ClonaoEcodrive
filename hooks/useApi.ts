import { useState, useEffect } from "react";

/**
 * Hook para obtener datos de la API de forma asíncrona.
 * @param endpoint - La ruta de la API (ejemplo: "benefits", "main-prize", "ganadores")
 */
export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/${endpoint}`);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

        const result = await response.json();
        setData(result.data);
      } catch (err) {
        console.error(`❌ Error en useApi(${endpoint}):`, err);
        setError("Error al obtener los datos");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
