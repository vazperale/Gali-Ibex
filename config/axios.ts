import axios from 'axios';

// Crear una instancia de Axios con la URL base de la API
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Definida en .env.local
});

// Interceptores (opcional) para manejar tokens o errores
apiClient.interceptors.request.use(
  (config) => {
    // Agregar encabezados o lógica adicional
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejar errores globalmente
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiClient;
