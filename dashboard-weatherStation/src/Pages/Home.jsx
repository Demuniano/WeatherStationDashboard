import React, { useState, useEffect } from 'react';
import Dashboard from '../Components/Dashboard';
import axios from 'axios'; // Asegúrate de instalar axios con `npm install axios`

function Home() {
  const [data, setData] = useState(null); // Cambia el estado inicial a null
  const [loading, setLoading] = useState(true); // Añade un estado de carga

  const fetchData = async () => {
    setLoading(true); // Activa el estado de carga al comenzar la solicitud
    try {
      const response = await axios.get('http://localhost:3000/data');
      console.log('Data fetched:', response.data);
      const newData = processData(response.data); // Puedes implementar una función para procesar los datos si es necesario
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Puedes manejar el error aquí si es necesario
    } finally {
      setLoading(false); // Desactiva el estado de carga después de completar la solicitud
    }
  };

  useEffect(() => {
    fetchData(); // Llama a fetchData al montar el componente

    const interval = setInterval(fetchData, 5 * 60 * 1000); // Llama a fetchData cada 5 minutos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const processData = (data) => {
    // Implementa aquí la lógica para procesar los datos y devolver el formato esperado
    // Ejemplo simplificado:
    return {
      temperature: parseFloat(data.temperature) || 23.80,
      station: data.station || 'Station-01',
      humidity: parseFloat(data.humidity) || 61.00,
      pressure: parseFloat(data.pressure) || 802.38,
      altitude: parseFloat(data.altitude) || 1925.31,
    };
  };

  if (loading) {
    return (
      <div className="home-container text-center">
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Dashboard data={data} />
    </div>
  );
}

export default Home;
