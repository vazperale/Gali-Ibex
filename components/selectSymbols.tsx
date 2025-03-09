// components/RecommendationChart.js
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import * as api from "../api/apiClient";
import { Select, SelectItem } from "@heroui/select";

const selectSymbols = ({ onSelectSymbol }: { onSelectSymbol: (symbol: string) => void }) => {

  interface symbolI{
    displaySymbol:string
  }

    const [stockSymbols, setStockSymbols] = useState<symbolI[]>([]); 

    useEffect(() => {
        async function getStockSymbols() {
          try {
            const datos = await api.getSymbols();
            setStockSymbols(datos); // Almacena los símbolos de las acciones
          } catch (error) {
            console.error("Error fetching stock symbols:", error);
          }
        }
    
        getStockSymbols();
      }, []); 

  return (
    <>
    <Select onChange={(e)=>{
        onSelectSymbol(e.target.value); // Llama a la función con el símbolo seleccionado
    }} className="max-w-xs mt-4" label="Stock Symbol" placeholder="Select an Stock Symbol">
        {stockSymbols.map((stockSymbol:symbolI) => (
          <SelectItem  key={stockSymbol.displaySymbol}>{stockSymbol.displaySymbol}</SelectItem>
        ))}
      </Select>
    </>
    
  );
};

export default selectSymbols;
