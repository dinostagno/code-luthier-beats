import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselINews = ({ images }) => {
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselINews;
