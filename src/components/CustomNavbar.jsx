import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FiUser, FiShoppingBag, FiMenu, FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from './Logo';
import './Navbar.css';

// Enlaces de navegación (anclas a secciones de la página).
const SECCIONES = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Café', href: '#cafe' },
  { label: 'Té', href: '#te' },
  { label: 'Contacto', href: '#contacto' },
];

function CustomNavbar() {
  // Estado del menú móvil y del modal de autenticación
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);

  const abrirLogin = () => {
    setMenuAbierto(false);
    setIsLoginForm(true);
    setIsLoginModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar autenticación
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

      {/* Modal de login / registro */}
      <Modal show={isLoginModalOpen} onHide={() => setIsLoginModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLoginForm ? 'Iniciar sesión' : 'Crear cuenta'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {!isLoginForm && (
              <>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="tu@correo.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </Button>
              </div>
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              {isLoginForm ? 'Entrar' : 'Registrarme'}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="link" onClick={() => setIsLoginForm(!isLoginForm)}>
            {isLoginForm ? '¿No tienes cuenta? Crea una' : 'Ya tengo cuenta'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomNavbar;
