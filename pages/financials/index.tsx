import { title } from "@/components/primitives";
import SelectSymbols from "@/components/selectSymbols";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import FinancialChart from "@/components/basicFinancials";

export default function DocsPage() {
    const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null); // Estado para almacenar el símbolo seleccionado
  
useEffect(() => {
  }, [selectedSymbol]);


  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Financials</h1>
          <SelectSymbols onSelectSymbol={setSelectedSymbol} />
        </div>
        {selectedSymbol && 
        <>
        <FinancialChart symbol={selectedSymbol}/>
        </>
  }
      </section>
      
    </DefaultLayout>
  );
}
