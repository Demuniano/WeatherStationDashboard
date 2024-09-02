// src/components/Widget.jsx
import React from 'react';

function Widget({ title, value, unit = '' }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xl">
        {value}
        {unit && <span className="text-sm ml-1">{unit}</span>}
      </p>
    </div>
  );
}

export default Widget;
