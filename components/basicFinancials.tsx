import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, LineChart, Legend } from 'recharts';
import * as api from '../api/apiClient';  // Asegúrate de importar tu función para obtener los datos

interface financialsI{
v:number
period:string
}

const FinancialChart = ({ symbol }: { symbol: string }) => {
    const [metrics, setMetrics] = useState<financialsI[]|null>([]);

  // Función para obtener los datos de la acción según el símbolo
 
  useEffect(() => {
    const getMetrics = async (symbol: string) => {
      try {
        const data = await api.getBasicFinancials(symbol);
        if (data && data.series && data.series.annual && data.series.annual.currentRatio) {
          const formattedMetrics = data.series.annual.currentRatio.map((item: financialsI) => ({
            period: item.period,
            v: item.v,
          }));          
          setMetrics(formattedMetrics);
        } else {
          setMetrics([]);
        }
      } catch (error) {
        console.error("Error fetching financial metrics:", error);
      }
    };
    getMetrics(symbol);
  }, [symbol]);

  return (
    <>
    <div style={{ width: "100%", height: "400px" }}>
      {metrics && metrics.length ?(
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={metrics}>
            <CartesianGrid stroke="#555555" strokeDasharray="3 3" />
            <XAxis dataKey="period" />
             <YAxis type="number" />
             <Tooltip />
             <Legend />
             <Line type='monotone' dataKey='v' stroke='#ef4444' strokeDasharray="3 4 5 2" />
          </LineChart>
        </ResponsiveContainer>
      ):<p className='text-center'>No result in Database</p> }
    </div>
    </>
  );
};

export default FinancialChart;
