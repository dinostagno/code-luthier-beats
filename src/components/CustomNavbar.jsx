import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSync, FaUser, FaBars } from 'react-icons/fa';
import '../App.css';

function getNavbar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <FaSync className="icon-rotate text-light" /> Inicio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FaBars /> {/* Icono para el Navbar.Toggle */}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about" className="text-light">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-light">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login" className="text-light">
            <FaUser /> Iniciar sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default getNavbar;

