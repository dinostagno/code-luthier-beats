import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSync, FaUser } from 'react-icons/fa'; // Importa FaUser desde 'react-icons/fa'
import '../App.css'; // Asegúrate de que este import apunte al archivo CSS con las animaciones

function getNavbar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <FaSync className="icon-rotate text-light" /> Inicio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about" className="text-light">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-light">Contacto</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/login" className="text-light">
            <FaUser /> Iniciar sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default getNavbar;
