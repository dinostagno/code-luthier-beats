import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { FaSync, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../App.css';

function CustomNavbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
    setIsLoginForm(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza aquí la lógica de inicio de sesión o registro con el email y la contraseña.
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" className="py-3">
        <Navbar.Brand style={{ fontFamily: "BentonSans, Helvetica Neue, sans-serif" }}>
          <FaSync className="icon-rotate text-light" /> Code Luthier Beats
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={handleLoginButtonClick} className="mr-2">
            <FaUser /> Login
          </Button>
        </Nav>
      </Navbar>

      <Modal
        show={isLoginModalOpen}
        onHide={handleCloseLoginModal}
        backdrop="static"
        keyboard={false}
        className={`fade ${isLoginModalOpen ? 'show' : ''}`}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isLoginForm ? 'Login' : 'Registro'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <Button variant="outline-secondary" onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </div>
              </div>
            </Form.Group>
            {!isLoginForm && (
              <div>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
              </div>
            )}
            <Button variant="primary" type="submit">
              {isLoginForm ? 'Login' : 'Registrarse'}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleForm}>
            {isLoginForm ? 'Registrarse' : 'Volver al Login'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomNavbar;
