// Logo minimalista: un grano de café dibujado en SVG.
// Al ser vectorial se ve nítido en cualquier pantalla y toma el color del texto.
function Logo({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="7.5"
        ry="10"
        transform="rotate(35 12 12)"
        fill="currentColor"
      />
      <path
        d="M7.2 18.6c2.4-1.6 2.6-4.1 3.4-6.6.8-2.5 2.6-4.6 6.2-6.6"
        stroke="var(--logo-groove, #fbfbfd)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Logo;
