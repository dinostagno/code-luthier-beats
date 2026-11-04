import React from 'react';

// Ícono de atención al cliente: taza con carita y audífonos (SVG original de la marca).
function Avatar({ size = 56, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="60" fill="#111" />
      {/* Taza, plato y vapor */}
      <path d="M79 64 C92 64 92 82 77 82" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M37 55 H83 L79 88 C78.4 92.5 75 96 70.5 96 H49.5 C45 96 41.6 92.5 41 88 Z" fill="#fff" />
      <ellipse cx="60" cy="100" rx="30" ry="3.5" fill="#fff" />
      <path d="M60 49 C56 44 63 41 59 35 M68 49 C64 44 71 41 67 35" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      {/* Carita */}
      <g fill="none" stroke="#111" strokeWidth="2.6" strokeLinecap="round">
        <path d="M51 70 C53 72.5 56 72.5 58 70 M64 70 C66 72.5 69 72.5 71 70" />
        <path d="M55 79 C58 83 64 83 67 79" />
      </g>
      <circle cx="49" cy="77" r="2.6" fill="#d9d9d9" />
      <circle cx="73" cy="77" r="2.6" fill="#d9d9d9" />
      {/* Audífonos con micrófono */}
      <path d="M30 63 C30 38 43 25 60 25 C77 25 90 38 90 63" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="23" y="56" width="13" height="21" rx="6" fill="#fff" stroke="#111" strokeWidth="2.5" />
      <rect x="84" y="56" width="13" height="21" rx="6" fill="#fff" stroke="#111" strokeWidth="2.5" />
      <path d="M30 76 C31 86 38 88 46 86" fill="none" stroke="#111" strokeWidth="7" strokeLinecap="round" />
      <path d="M30 76 C31 86 38 88 46 86" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="48" cy="85.5" r="4.2" fill="#fff" stroke="#111" strokeWidth="2.5" />
    </svg>
  );
}

export default Avatar;
