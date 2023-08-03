import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const message = `Todos los derechos reservados ${currentYear}`;

  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container d-flex justify-content-center">
        <p className="text-white">{message}</p>
      </div>
    </footer>
  );
};

export default Footer;
