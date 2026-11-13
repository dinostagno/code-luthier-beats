import React from 'react';

// Ícono de atención al cliente: taza con carita y audífonos (SVG original de la marca).
// Trazos gruesos y pocos detalles para que se vea nítido en tamaños pequeños (28–56 px).
// conFondo=false: sin círculo propio (lo dibuja el contenedor con border-radius, que suaviza mejor el borde)
function Avatar({ size = 56, className = '', conFondo = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden="true" style={{ display: 'block' }}>
      {/* r=59.5: deja medio punto para el suavizado del borde dentro del recuadro */}
      {conFondo && <circle cx="60" cy="60" r="59.5" fill="#111" />}
      {/* Taza, plato y vapor */}
      <path d="M82 62 C97 62 97 84 80 84" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <path d="M33 52 H87 L82.5 89 C81.8 94.5 77.8 98 72.5 98 H47.5 C42.2 98 38.2 94.5 37.5 89 Z" fill="#fff" />
      <rect x="26" y="99" width="68" height="6" rx="3" fill="#fff" />
      <path d="M55 45 C50.5 40 58 36.5 53.5 30 M66 45 C61.5 40 69 36.5 64.5 30" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" />
      {/* Carita */}
      <g fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round">
        <path d="M47.5 68 C50 71.5 54 71.5 56.5 68 M63.5 68 C66 71.5 70 71.5 72.5 68" />
        <path d="M53 79 C56.5 84 63.5 84 67 79" />
      </g>
      {/* Audífonos con micrófono */}
      <path d="M25 62 C25 34 40 20 60 20 C80 20 95 34 95 62" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" />
      <rect x="16" y="52" width="17" height="26" rx="8" fill="#fff" stroke="#111" strokeWidth="3.5" />
      <rect x="87" y="52" width="17" height="26" rx="8" fill="#fff" stroke="#111" strokeWidth="3.5" />
      <path d="M24 77 C24 89 32 92 41 90" fill="none" stroke="#111" strokeWidth="11" strokeLinecap="round" />
      <path d="M24 77 C24 89 32 92 41 90" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="43.5" cy="89.5" r="6" fill="#fff" stroke="#111" strokeWidth="3.5" />
    </svg>
  );
}

export default Avatar;
