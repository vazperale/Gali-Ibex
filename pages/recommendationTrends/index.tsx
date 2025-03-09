import { title } from "@/components/primitives";
import RecommendationChart from "@/components/recommendationTrends";
import SelectSymbols from "@/components/selectSymbols";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";

export default function DocsPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null); // Estado para almacenar el símbolo seleccionado

  // Función para obtener los datos de la acción según el símbolo
 

  // Efecto para cargar los datos de la acción solo cuando el símbolo cambia
  useEffect(() => {

  }, [selectedSymbol]); // Se ejecuta cada vez que el símbolo seleccionado cambia


  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Recommendation Trends</h1>
        </div>
        <SelectSymbols onSelectSymbol={setSelectedSymbol} />

         {selectedSymbol && 
         <RecommendationChart symbol={selectedSymbol}/>
        }
      </section>
    </DefaultLayout>
  );
}
