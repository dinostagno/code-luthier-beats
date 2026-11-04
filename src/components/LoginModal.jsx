import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FiX, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';
import './LoginModal.css';

// Campo con etiqueta flotante (placeholder=" " permite detectar si está vacío vía CSS)
function Campo({ id, label, type = 'text', value, onChange, autoComplete, children }) {
  return (
    <div className="clb-field">
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required
      />
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

function LoginModal({ show, onHide }) {
  const [modo, setModo] = useState('login'); // 'login' | 'registro'
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });
  const [verPassword, setVerPassword] = useState(false);

  const esLogin = modo === 'login';
  const set = (campo) => (valor) => setForm({ ...form, [campo]: valor });

  // Reinicia el formulario al cerrar
  const cerrar = () => {
    onHide();
    setModo('login');
    setVerPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar autenticación
  };

  return (
    <Modal
      show={show}
      onHide={cerrar}
      centered
      dialogClassName="clb-login"
      backdropClassName="clb-login-backdrop"
      aria-labelledby="clb-login-title"
    >
      <button type="button" className="clb-login__close" onClick={cerrar} aria-label="Cerrar">
        <FiX />
      </button>

      <div className="clb-login__body">
        <span className="clb-login__logo"><Logo size={44} /></span>
        <h2 id="clb-login-title">{esLogin ? 'Inicia sesión' : 'Crea tu cuenta'}</h2>
        <p className="clb-login__subtitle">
          {esLogin ? 'Accede a tus pedidos y favoritos.' : 'Compra más rápido y sigue tus pedidos.'}
        </p>

        <form onSubmit={handleSubmit} className="clb-login__form">
          {!esLogin && (
            <Campo id="login-nombre" label="Nombre" value={form.nombre} onChange={set('nombre')} autoComplete="name" />
          )}
          <Campo id="login-email" label="Correo electrónico" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
          <Campo
            id="login-password"
            label="Contraseña"
            type={verPassword ? 'text' : 'password'}
            value={form.password}
            onChange={set('password')}
            autoComplete={esLogin ? 'current-password' : 'new-password'}
          >
            <button
              type="button"
              className="clb-field__toggle"
              onClick={() => setVerPassword(!verPassword)}
              aria-label={verPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {verPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </Campo>

          <button type="submit" className="clb-login__submit">
            {esLogin ? 'Continuar' : 'Crear cuenta'} <FiArrowRight />
          </button>
        </form>

        {esLogin && (
          <a href="#" className="clb-login__link" onClick={(e) => e.preventDefault()}>
            ¿Olvidaste tu contraseña?
          </a>
        )}
      </div>

      <div className="clb-login__footer">
        {esLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
        <button type="button" className="clb-login__link" onClick={() => setModo(esLogin ? 'registro' : 'login')}>
          {esLogin ? 'Crea una' : 'Inicia sesión'}
        </button>
      </div>
    </Modal>
  );
}

export default LoginModal;
