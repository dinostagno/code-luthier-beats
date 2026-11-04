import React, { useState } from 'react';
import { FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import LoginModal from './LoginModal';
import './Navbar.css';

// Enlaces de navegación (anclas a secciones de la página).
const SECCIONES = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Café', href: '#cafe' },
  { label: 'Té', href: '#te' },
  { label: 'Contacto', href: '#contacto' },
];

function CustomNavbar() {
  // Estado del menú móvil y del modal de cuenta
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const abrirLogin = () => {
    setMenuAbierto(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className={`clb-nav ${menuAbierto ? 'is-open' : ''}`}>
        <nav className="clb-nav__inner" aria-label="Principal">
          <a href="#inicio" className="clb-nav__brand" onClick={() => setMenuAbierto(false)}>
            <Logo />
            <span>Code Luthier Beats</span>
          </a>

          {/* Enlaces visibles solo en escritorio */}
          <ul className="clb-nav__links">
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>

          <div className="clb-nav__actions">
            <button type="button" className="clb-nav__icon" onClick={abrirLogin} aria-label="Mi cuenta">
              <FiUser />
            </button>
            {/* TODO: conectar con el carrito */}
            <button type="button" className="clb-nav__icon" aria-label="Carrito">
              <FiShoppingBag />
            </button>
            <button
              type="button"
              className="clb-nav__icon clb-nav__toggle"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
            >
              {menuAbierto ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* Menú desplegable en pantallas ≤ 768px */}
        <div className="clb-nav__mobile" hidden={!menuAbierto}>
          <ul>
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <a href={s.href} onClick={() => setMenuAbierto(false)}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <LoginModal show={isLoginModalOpen} onHide={() => setIsLoginModalOpen(false)} />
    </>
  );
}

export default CustomNavbar;
