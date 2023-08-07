import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  //     const [imageHeight, setImageHeight] = useState(500); // Altura predeterminada para dispositivos no móviles

  //   useEffect(() => {
  //     const image = new Image();
  //     image.src = "/Pink_Floyd_logo.jpg";

  //     image.onload = () => {
  //       // Cuando la imagen se haya cargado, actualizamos el estado con su altura real
  //       setImageHeight(image.height);
  //     };
  //   }, []);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Función para actualizar la altura de la ventana al cambiar el tamaño
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Agregar el evento de escucha para cambios en el tamaño de la ventana
    window.addEventListener("resize", handleWindowResize);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const carouselStyle1 = {
    backgroundImage: 'url("./Pink_Floyd_logo.svg")',
    backgroundPosition: "center",
    height: `${windowHeight}px`,
  };
  const carouselStyle2 = {
    backgroundImage: 'url("./Pink_Floyd,_1971.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    width: "100%",
  };
  if (window.innerWidth <= 768) {
    carouselStyle1.backgroundSize = "contain"; // Ajustar imagen para dispositivos móviles
  }

  return (
    <Carousel>
      <Carousel.Item style={carouselStyle1}>
        <img
          className="d-block w-100"
          src="carousel-image-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>First slide description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselStyle2}>
        <img
          className="d-block w-100"
          src="carousel-image-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Second slide description</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
  );
}

export default CarouselComponent;
