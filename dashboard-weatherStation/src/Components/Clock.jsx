import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      setTime(`${formattedHours}:${formattedMinutes} ${period}`);
    };

    updateClock(); // Inicializa el tiempo al cargar el componente
    const timer = setInterval(updateClock, 1000); // Actualiza la hora cada segundo

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-4xl font-mono tracking-wide">{time}</p>
    </div>
  );
}

export default Clock;
