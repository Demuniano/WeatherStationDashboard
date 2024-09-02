// src/components/Label.jsx
import React from 'react';

// Puedes cambiar la fuente si tienes una fuente específica en mente
function Label({ text }) {
  return (
    <div className="text-xl font-semibold text-gray-300 flex items-center justify-center h-full font-poppins">
      {text}
    </div>
  );
}

export default Label;
