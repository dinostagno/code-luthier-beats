import React, { useId } from 'react';

// Ilustración original de la marca: perfil en blanco y negro tomando café.
function Avatar({ size = 56, className = '' }) {
  const clipId = useId(); // id único por instancia para el clipPath

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}><circle cx="60" cy="60" r="60" /></clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="120" height="120" fill="#111" />
        {/* Cabeza y cuello */}
        <path fill="#fff" d="M30 124 L33 100 C27 90 25 78 26 65 C27 43 42 29 61 29 C74 29 84 36 86 48 C87 52 87 54 89 57 L93 63 C94 65 93 66 91 66.5 L89 67 C90 69 89.5 70.5 88 71 C89 73 88.5 75 86 76 C86 80 84 83 79 84 L71 85 L69 124 Z" />
        {/* Pelo */}
        <path fill="#111" stroke="#fff" strokeWidth="2.6" strokeLinejoin="round" d="M27 66 C24 42 40 24 62 24 C76 24 87 31 89 45 C84 40 77 39 72 41 C68 37 61 38 58 42 C54 40 48 42 46 47 C41 47 38 52 39 57 C34 57 31 61 31 67 Z" />
        {/* Ojo cerrado y oreja */}
        <path fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" d="M71 54 C74 57 78 57 81 54.5 M47 60 C42 57 39 64 43 69 C45 71 47 70 47.5 68" />
        {/* Taza */}
        <path fill="#fff" stroke="#111" strokeWidth="3" d="M85 71 H107 L104 95 C103.6 98 101 100 98 100 H94 C91 100 88.6 98 88.2 95 Z" />
        <path fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" d="M105 77 C113 77 113 89 104.5 89" />
        {/* Vapor */}
        <path fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" d="M93 65 C90 60 96 57 93 51 M100 65 C97 59 103 56 100 49" />
      </g>
    </svg>
  );
}

export default Avatar;
