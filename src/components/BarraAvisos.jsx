import React from 'react';
import { AVISOS } from '../config';
import './BarraAvisos.css';

// Franja informativa con desplazamiento infinito.
// El contenido se repite en dos mitades idénticas: la animación recorre -50% y el bucle es continuo.
// Cada mitad lleva los avisos dos veces para cubrir pantallas muy anchas.
function BarraAvisos({ avisos = AVISOS }) {
  const mitad = [...avisos, ...avisos];
  const items = [...mitad, ...mitad];

  return (
    <div className="clb-ticker" role="region" aria-label="Avisos de la tienda">
      {/* Texto completo para lectores de pantalla; la animación es decorativa */}
      <p className="clb-ticker__sr">{avisos.join('. ')}</p>
      <div className="clb-ticker__track" aria-hidden="true">
        {items.map((texto, i) => (
          <span key={i} className="clb-ticker__item">{texto}</span>
        ))}
      </div>
    </div>
  );
}

export default BarraAvisos;
