import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  './Pink_Floyd_logo.jpg', // Reemplaza con la ruta de tus imágenes
  './Pink_Floyd_logo.jpg',
  './Pink_Floyd_logo.jpg',
];

function CarouselProduct() {
  return (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Imagen ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselProduct;
