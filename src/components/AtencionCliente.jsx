import React, { useEffect, useRef, useState } from 'react';
import { LuShoppingBag, LuPackage, LuTruck, LuMessageCircle, LuX, LuArrowUpRight } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import Avatar from './Avatar';
import { HORARIO_ATENCION, linkWhatsApp } from '../config';
import { estadoAtencion } from '../utils/horario';
import './AtencionCliente.css';

// Atajos de consulta: cada uno abre WhatsApp con el mensaje ya escrito.
// `tono` define el color de la tarjeta (ver .clb-tile--* en el CSS).
const TEMAS = [
  { label: 'Hacer un pedido', detalle: 'Arma tu compra', Icono: LuShoppingBag, tono: 'cafe', mensaje: 'Hola, quiero hacer un pedido.' },
  { label: 'Consultar stock', detalle: '¿Lo tenemos?', Icono: LuPackage, tono: 'azul', mensaje: 'Hola, quería consultar el stock de un producto.' },
  { label: 'Envíos y plazos', detalle: 'Todo Chile', Icono: LuTruck, tono: 'verde', mensaje: 'Hola, ¿cómo funcionan los envíos y cuánto tardan?' },
  { label: 'Otra consulta', detalle: 'Escríbenos', Icono: LuMessageCircle, tono: 'morado', mensaje: 'Hola, tengo una consulta.' },
];

function AtencionCliente() {
  const [abierto, setAbierto] = useState(false);
  const raizRef = useRef(null);
  const botonRef = useRef(null);
  const estado = estadoAtencion(); // se recalcula en cada apertura del panel

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
            <Avatar size={40} />
            <div>
              <h2 id="clb-support-title">Hola, ¿te ayudamos?</h2>
              <p className="clb-support__status">
                <span className={`clb-support__dot ${estado.abierto ? 'is-open' : ''}`} aria-hidden="true" />
                {estado.texto}
              </p>
            </div>
            <button type="button" className="clb-support__close" onClick={() => setAbierto(false)} aria-label="Cerrar">
              <LuX />
            </button>
          </header>

          <p className="clb-support__label">¿En qué te ayudamos?</p>

          <ul className="clb-support__tiles">
            {TEMAS.map(({ label, detalle, Icono, tono, mensaje }) => (
              <li key={label}>
                <a
                  className={`clb-tile clb-tile--${tono}`}
                  href={linkWhatsApp(mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="clb-tile__top">
                    <span className="clb-tile__icon"><Icono aria-hidden="true" /></span>
                    <LuArrowUpRight className="clb-tile__go" aria-hidden="true" />
                  </span>
                  <span className="clb-tile__label">{label}</span>
                  <span className="clb-tile__detail">{detalle}</span>
                </a>
              </li>
            ))}
          </ul>

          <footer className="clb-support__footer">
            <div>
              <strong>¿Prefieres escribir directo?</strong>
              <span>{HORARIO_ATENCION}</span>
            </div>
            <a
              className="clb-support__wa"
              href={linkWhatsApp('Hola, vengo desde la tienda online.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              title="Escribir por WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </footer>
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
        <Avatar size={56} conFondo={false} />
      </button>
    </div>
  );
}

export default AtencionCliente;
