import React from 'react';
import Card from 'react-bootstrap/Card';

function MiTarjeta() {
  return (
    <Card
      className="m-3" // Margen en todos los lados
      style={{
        width: '300px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        margin: 'auto', // Centra horizontalmente
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03) translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }}
    >
      <Card.Body>
        <Card.Title>Título de la Tarjeta</Card.Title>
        <Card.Text>
          Contenido de la tarjeta...
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MiTarjeta;
