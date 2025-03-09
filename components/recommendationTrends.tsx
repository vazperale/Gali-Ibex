// components/RecommendationChart.js
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import * as api from "../api/apiClient";


interface recommendationTrendsI{
    buy: number,
    hold: number,
    period: string
    sell: number,
    strongBuy: number,
    strongSell: number,
    symbol: string
}

const RecommendationChart = ({ symbol }: { symbol: string }) => {
    const [data, setData] = useState<recommendationTrendsI[]|null>([]);

    useEffect(() => {
        async function fetchRecommendationTrends(symbol:string) {
          try {
            const recommendationData = await api.getRecommendationTrends(symbol);
            const formattedData = recommendationData.map((item:recommendationTrendsI) => ({
              month: item.period, // Fecha o período
              StrongBuy: item.strongBuy,
              Buy: item.buy,
              Hold: item.hold,
              Sell: item.sell,
              StrongSell: item.strongSell,
            }));
            setData(formattedData); // Almacena los datos formateados en el estado
          } catch (error) {
            console.error("Error fetching recommendation trends:", error);
          }
        }
        fetchRecommendationTrends(symbol);
    },[symbol]);

  return (
    <>
    {data && data.length >0 ?  (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg w-full">
      <h2 className="text-xl font-bold text-white text-center mb-4">{symbol} Recommendation Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555555" />
          <XAxis dataKey="month" tick={{ fill: "#FFFFFF" }} />
          <YAxis tick={{ fill: "#FFFFFF" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="StrongSell" stackId="a" fill="#ef4444" name="Strong Sell" />
          <Bar dataKey="Sell" stackId="a" fill="#f87171" name="Sell" />
          <Bar dataKey="Hold" stackId="a" fill="#facc15" name="Hold" />
          <Bar dataKey="Buy" stackId="a" fill="#4ade80" name="Buy" />
          <Bar dataKey="StrongBuy" stackId="a" fill="#21c55d" name="Strong Buy" />

        </BarChart>
      </ResponsiveContainer>
    </div>
    ):
    <p>No data results</p>
    }
    </>
    
  );
};

export default RecommendationChart;
