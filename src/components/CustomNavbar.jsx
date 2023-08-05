import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSync, FaUser, FaBars, FaTimes, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import '../App.css';

function CustomNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <FaSync className="icon-rotate text-light" /> Code Luthier Beats
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleNavbarToggle}
      >
        {isNavbarOpen ? <FaTimes /> : <FaBars />} {/* Cambio de icono dependiendo del estado */}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" in={isNavbarOpen}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/code-luthier-beats/about" className="text-light"><FaInfoCircle /> Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/code-luthier-beats/contact" className="text-light"><FaEnvelope /> Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/code-luthier-beats/login" className="text-light">
            <FaUser /> Iniciar sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;


