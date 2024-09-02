import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Importa los estilos por defecto
import { FaSnowflake, FaSun, FaCloudSun } from 'react-icons/fa'; // Agrega un ícono para temperaturas cálidas

function TemperatureMeter({ temperature }) {
  // Determine the color based on temperature
  const getColor = (temp) => {
    if (temp < 10) return '#00f'; // Cold
    if (temp > 30) return '#f00';  // Hot
    return '#ff0';              // Warm
  };

  // Determine the icon based on temperature
  const getIcon = (temp) => {
    if (temp < 10) return <FaSnowflake className="text-blue-500 text-3xl" />;
    if (temp > 30) return <FaSun className="text-yellow-500 text-3xl" />;
    return <FaCloudSun className="text-yellow-400 text-3xl" />; // Icon for warm temperatures
  };

  // Calculate the percentage for the CircularProgressbar
  const percentage = Math.min(Math.max((temperature - 0) / (40 - 0) * 100, 0), 100);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-40 h-40"> {/* Ajusta el tamaño según sea necesario */}
        <CircularProgressbar
          value={percentage}
          text={`${temperature}°C`}
          styles={buildStyles({
            pathColor: getColor(temperature),
            textColor: '#ffffff',
            trailColor: '#d6d6d6',
            textSize: '16px', // Ajusta el tamaño del texto si es necesario
          })}
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="absolute bottom-10"> {/* Ajusta el espacio desde el fondo */}
            {getIcon(temperature)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureMeter;
