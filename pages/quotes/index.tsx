// pages/QuotesPage.tsx
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import * as api from "../../api/apiClient";
import SelectSymbols from "@/components/selectSymbols"; // Asegúrate de importar SelectSymbols

interface quoteI{
c:number
d:number
dh:number
h:number
l:number
o:number
pc:number
t:number
}

export default function QuotesPage() {
  const [stockData, setStockData] = useState<quoteI | null>(); // Estado para almacenar los datos de la acción
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null); // Estado para almacenar el símbolo seleccionado

  // Función para obtener los datos de la acción según el símbolo
  async function fetchStockData(quote: string) {
    try {
      const datos = await api.getStockQuote(quote);
      setStockData(datos); // Almacena los datos en el estado
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  }

  // Efecto para cargar los datos de la acción solo cuando el símbolo cambia
  useEffect(() => {
    if (selectedSymbol) {
      fetchStockData(selectedSymbol); // Llama a la API solo si el símbolo es válido
    }
  }, [selectedSymbol]); // Se ejecuta cada vez que el símbolo seleccionado cambia

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center text-center justify-center">
          <h1 className={title()}>Quotes</h1>

          {/* Pasamos setSelectedSymbol como prop a SelectSymbols */}
          <SelectSymbols onSelectSymbol={setSelectedSymbol} />

          {stockData && selectedSymbol && (
            <>
              <div className="mt-3 flex flex-wrap justify-center gap-4 mb-5">
              <div>
                  <p className="mb-5">Last close price</p>
                  <p className="text-violet-500"> {stockData.pc} $</p>
                </div>
              <div>
                  <p className="mb-5">Open price today</p>
                  <p className="text-yellow-400"> {stockData.o} $</p>
                </div>
                <div>
                  <p className="mb-5">Actual price</p>
                  <p className="text-blue-600">{stockData.c} $</p>
                </div>
                <div>
                  <p className="mb-5">Maximum today</p>
                  <p className="text-green-500"> {stockData.h} $</p>
                </div>
                <div>
                  <p className="mb-5">Minimum today</p>
                  <p className="text-red-700"> {stockData.l} $</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
