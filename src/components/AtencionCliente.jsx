import React, { useEffect, useRef, useState } from 'react';
import { FiX, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Avatar from './Avatar';
import { HORARIO_ATENCION, linkWhatsApp } from '../config';
import './AtencionCliente.css';

// Atajos de consulta: cada uno abre WhatsApp con el mensaje ya escrito
const TEMAS = [
  { label: 'Quiero hacer un pedido', mensaje: 'Hola, quiero hacer un pedido.' },
  { label: 'Consultar stock de un producto', mensaje: 'Hola, quería consultar el stock de un producto.' },
  { label: 'Envíos y plazos de entrega', mensaje: 'Hola, ¿cómo funcionan los envíos y cuánto tardan?' },
  { label: 'Otra consulta', mensaje: 'Hola, tengo una consulta.' },
];

function AtencionCliente() {
  const [abierto, setAbierto] = useState(false);
  const raizRef = useRef(null);
  const botonRef = useRef(null);

  // Cierra con Escape o con clic fuera del panel
  useEffect(() => {
    if (!abierto) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setAbierto(false);
        botonRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!raizRef.current?.contains(e.target)) setAbierto(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [abierto]);

  return (
    <div className="clb-support" ref={raizRef}>
      {abierto && (
        <div className="clb-support__panel" role="dialog" aria-labelledby="clb-support-title">
          <header className="clb-support__header">
            <Avatar size={44} />
            <div>
              <h2 id="clb-support-title">Hola, ¿te ayudamos?</h2>
              <p>Respondemos por WhatsApp · {HORARIO_ATENCION}</p>
            </div>
            <button type="button" className="clb-support__close" onClick={() => setAbierto(false)} aria-label="Cerrar">
              <FiX />
            </button>
          </header>

          <ul className="clb-support__topics">
            {TEMAS.map((t) => (
              <li key={t.label}>
                <a href={linkWhatsApp(t.mensaje)} target="_blank" rel="noopener noreferrer">
                  {t.label}
                  <FiChevronRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <a
            className="clb-support__cta"
            href={linkWhatsApp('Hola, vengo desde la tienda online.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> Escribir por WhatsApp
          </a>
        </div>
      )}

      <button
        ref={botonRef}
        type="button"
        className={`clb-support__fab ${abierto ? 'is-open' : ''}`}
        onClick={() => setAbierto(!abierto)}
        aria-label={abierto ? 'Cerrar atención al cliente' : 'Abrir atención al cliente'}
        aria-expanded={abierto}
      >
        <Avatar size={56} />
      </button>
    </div>
  );
}

export default AtencionCliente;
