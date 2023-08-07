import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaSync, FaUser, FaBars, FaTimes, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import '../App.css';

function CustomNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleProductsHover = () => {
    console.log("Hover en la opción Products");
  };

  const handleMarketplaceHover = () => {
    console.log("Hover en la opción Marketplace");
  };

  return (
    <Navbar bg="dark" expand="lg" className="py-3">
      <Navbar.Brand style={{ fontFamily: "BentonSans, Helvetica Neue, sans-serif" }}>
        <FaSync className="icon-rotate text-light" /> Code Luthier Beats
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleNavbarToggle}
      >
        {isNavbarOpen ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" in={isNavbarOpen}>
        <Nav className="mr-auto">
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-light" id="products-dropdown" onMouseEnter={handleProductsHover}>
              Products
            </Dropdown.Toggle>
            <Dropdown.Menu className="sub-menu" aria-labelledby="products-dropdown">
              <Dropdown.Item as={Link} to="/code-luthier-beats/products/item1">Item 1</Dropdown.Item>
              <Dropdown.Item as={Link} to="/code-luthier-beats/products/item2">Item 2</Dropdown.Item>
              {/* Add more items here */}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-light" id="marketplace-dropdown" onMouseEnter={handleMarketplaceHover}>
              Marketplace
            </Dropdown.Toggle>
            <Dropdown.Menu className="sub-menu" aria-labelledby="marketplace-dropdown">
              <Dropdown.Item as={Link} to="/code-luthier-beats/products/item1">Item 1</Dropdown.Item>
              <Dropdown.Item as={Link} to="/code-luthier-beats/products/item2">Item 2</Dropdown.Item>
              {/* Add more items here */}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/code-luthier-beats/login" className="text-light justify-content-end">
            <FaUser /> Iniciar sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
