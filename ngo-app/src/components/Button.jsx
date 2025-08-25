import React from 'react';

export default function Button({ children, className = "", ...props }) {
  return (
    <button 
      className={`px-4 py-2 rounded-lg font-semibold text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
