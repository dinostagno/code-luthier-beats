import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { NOMBRE_TIENDA, HORARIO_ATENCION, linkWhatsApp } from '../config';
import './Footer.css';

// Columnas del pie. `externo` abre en otra pestaña (WhatsApp).
const COLUMNAS = [
  {
    titulo: 'Tienda',
    enlaces: [
      { label: 'Destacados', href: '#inicio' },
      { label: 'Café', href: '#cafe' },
      { label: 'Té', href: '#te' },
    ],
  },
  {
    titulo: 'Ayuda',
    enlaces: [
      { label: 'Hacer un pedido', href: linkWhatsApp('Hola, quiero hacer un pedido.'), externo: true },
      { label: 'Envíos y despacho', href: linkWhatsApp('Hola, ¿cómo funcionan los envíos?'), externo: true },
      { label: 'Consultar stock', href: linkWhatsApp('Hola, quería consultar el stock de un producto.'), externo: true },
    ],
  },
  {
    titulo: 'Contacto',
    enlaces: [
      { label: 'Escríbenos por WhatsApp', href: linkWhatsApp('Hola, vengo desde la tienda online.'), externo: true },
    ],
    nota: HORARIO_ATENCION,
  },
];

const MQ_ESCRITORIO = '(min-width: 769px)';

// true en pantallas de escritorio; se actualiza al cambiar el ancho
function useEsEscritorio() {
  const [es, setEs] = useState(() => window.matchMedia(MQ_ESCRITORIO).matches);
  useEffect(() => {
    const mq = window.matchMedia(MQ_ESCRITORIO);
    const onChange = (e) => setEs(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return es;
}

function Footer() {
  const anio = new Date().getFullYear();
  const esEscritorio = useEsEscritorio();

  return (
    <footer id="contacto" className="clb-footer">
      <div className="clb-footer__inner">
        <p className="clb-footer__note">
          Precios en pesos chilenos (CLP). Stock sujeto a disponibilidad; confirmamos cada pedido por WhatsApp.
        </p>

        {/* En móvil cada columna es un <details> desplegable; en escritorio queda siempre abierta */}
        <nav className="clb-footer__cols" aria-label="Pie de página">
          {COLUMNAS.map((col) => (
            <details key={col.titulo} className="clb-footer__col" open={esEscritorio || undefined}>
              <summary onClick={(e) => esEscritorio && e.preventDefault()}>{col.titulo}</summary>
              <ul>
                {col.enlaces.map((e) => (
                  <li key={e.label}>
                    <a
                      href={e.href}
                      {...(e.externo && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {e.label}
                    </a>
                  </li>
                ))}
                {col.nota && <li className="clb-footer__muted">{col.nota}</li>}
              </ul>
            </details>
          ))}
        </nav>

        <div className="clb-footer__bottom">
          <span className="clb-footer__brand">
            <Logo size={16} /> {NOMBRE_TIENDA}
          </span>
          <span>Copyright © {anio} {NOMBRE_TIENDA}. Todos los derechos reservados.</span>
          <span className="clb-footer__country">Chile</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
