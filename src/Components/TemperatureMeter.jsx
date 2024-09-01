// src/components/TemperatureMeter.jsx
import React from 'react';
import { FaSnowflake, FaSun } from 'react-icons/fa';

function TemperatureMeter({ temperature }) {
  // Determine the color based on temperature
  const getColor = (temp) => {
    if (temp < 10) return 'bg-blue-500'; // Cold
    if (temp > 30) return 'bg-red-500';  // Hot
    return 'bg-yellow-500';              // Warm
  };

  // Determine the icon based on temperature
  const getIcon = (temp) => {
    if (temp < 10) return <FaSnowflake className="text-white text-3xl" />;
    if (temp > 30) return <FaSun className="text-white text-3xl" />;
    return null;
  };

  // Calculate the percentage of the semicircle to fill
  const percentage = Math.min(Math.max((temperature - 0) / (40 - 0) * 100, 0), 100);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-64 h-32">
        <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,50 A50,50 0 0,1 100,50"
            fill="url(#gradient)"
            stroke="black"
            strokeWidth="1"
          />
          <path
            d={`M0,50 A50,50 0 ${percentage > 50 ? '1,1' : '0,1'} 1 100,50`}
            fill="black"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center rounded-full bg-gray-800">
          <div className="text-center text-white">
            {getIcon(temperature)}
            <div className="text-3xl font-bold mt-2">{temperature}°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureMeter;
