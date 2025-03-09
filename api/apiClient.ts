import apiClient from "@/config/axios";

export async function getStockQuote(symbol: string) {
  try {
    // Pasamos el token como parte de la URL en lugar del header
    const response = await apiClient.get(`/quote`, {
      params: {
        symbol: symbol,
        token: process.env.NEXT_PUBLIC_API_KEY,  // Usa tu API Key aquí
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
}

export async function getSymbols() {
  try {
    // Pasamos el token como parte de la URL en lugar del header
    const response = await apiClient.get(`/stock/symbol`, {
      params: {
        exchange: 'US',
        token: process.env.NEXT_PUBLIC_API_KEY,  // Usa tu API Key aquí
      },
    });
    const datosReducidos=response.data.slice(0,20);
    return datosReducidos;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
}

export async function getRecommendationTrends(symbol:string) {
  try {
    // Pasamos el token como parte de la URL en lugar del header
    const response = await apiClient.get(`/stock/recommendation`, {
      params: {
        symbol: symbol,
        token: process.env.NEXT_PUBLIC_API_KEY,  // Usa tu API Key aquí
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
}
export async function getBasicFinancials(symbol:string) {
  try {
    // Pasamos el token como parte de la URL en lugar del header
    const response = await apiClient.get(`/stock/metric`, {
      params: {
        symbol: symbol,
        metric: 'all',
        token: process.env.NEXT_PUBLIC_API_KEY,  // Usa tu API Key aquí
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
}
