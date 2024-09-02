import React from 'react';

function Widget({ title, children }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4 text-gray-300">{title}</h3>
      {children}
    </div>
  );
}

export default Widget;
