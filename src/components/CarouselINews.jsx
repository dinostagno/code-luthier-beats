import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

const CarouselINews = ({ images }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            {images.map((image) => (
              <Carousel.Item key={image.id}>
                <img
                  className="d-block w-100 img-fluid"
                  src={image.src}
                  alt={image.alt}
                />
                {/* <Carousel.Caption>
                  <h3>{image.caption}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselINews;

