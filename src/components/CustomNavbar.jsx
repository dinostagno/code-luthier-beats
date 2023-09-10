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
        className="border-0"
      >
        {isNavbarOpen ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" in={isNavbarOpen}>
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
