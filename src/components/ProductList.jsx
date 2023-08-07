import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState({});

  // Función para actualizar la cantidad del producto en el carrito
  const actualizarCantidad = (productId, cantidad) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: cantidad,
    }));
  };

  // Función para calcular el precio total del producto con la cantidad seleccionada
  const calcularPrecioTotal = (product) => {
    const cantidad = cart[product.id] || 1;
    return product.precio * cantidad;
  };

  // Función para agregar el producto al carrito
  const agregarAlCarrito = (product) => {
    const cantidad = cart[product.id] || 1;
    // Aquí podrías implementar una lógica para enviar el producto al carrito global
    console.log(`Agregado al carrito: ${cantidad}x ${product.titulo}`);
  };

  return (
    <Container>
      <h2>Listado de Productos</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.imagen} alt={product.titulo} />
              <Card.Body>
                <Card.Text>
                  Cantidad:{' '}
                  <input
                    type="number"
                    min="1"
                    style={{ width: '50px', textAlign: 'center' }}
                    value={cart[product.id] || 1}
                    onChange={(e) => actualizarCantidad(product.id, parseInt(e.target.value))}
                  />
                </Card.Text>
                <Card.Text>Precio: ${product.precio}</Card.Text>
                <Card.Text>
                  Precio Total: ${calcularPrecioTotal(product)}{' '}
                  <button
                    onClick={() => agregarAlCarrito(product)}
                    style={{ marginLeft: '10px' }} // Ajusta el margen izquierdo aquí
                  >
                    <FaShoppingCart />
                    Agregar al carrito
                  </button>
                </Card.Text>
                <Card.Title>{product.titulo}</Card.Title>
                <Card.Text>{product.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
