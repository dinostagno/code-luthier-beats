import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MyProduct() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="ruta/de/la/imagen.png" />
      <Card.Body>
        <Card.Title>Product Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default MyProduct;
