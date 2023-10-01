import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import NeckInfo from './components/NeckAdjustments';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import SeccionesOffcanvas from './components/SeccionesOffcanvas';
import CardExample from './components/CardExample';
import MyProduct from './components/CardProduct';
import AudioChatRoom from './components/AudioChatRoom';
import Carrusel from './components/CarouselComponent';
import CarouselINews from './components/CarouselINews';
import MiTarjeta from './components/MiTarjeta';
import OperadoraAtencionCliente from './components/OperadoraAtencionCliente'
import Login from './components/Login'
import SalesforceLogin from './components/SalesforceLogin';


// Importa otros componentes para las rutas

function App() {
  const imagesData = [
    {
      "id": 1,
      "precio": 7990,
      "titulo": "Café Illy 250gr",
      "imagen": "./cafe.jpg",
      "descripcion": "Café colombiano de selección, grano tostado. Disfruta del auténtico sabor y aroma del café.",
      "cantidad": 1
    },
    {
      "id": 2,
      "precio": 7990,
      "titulo": "Café Illy 250gr",
      "imagen": "./cafe.jpg",
      "descripcion": "Café colombiano de selección, grano tostado. Disfruta del auténtico sabor y aroma del café.",
      "cantidad": 1
    },
    {
      "id": 3,
      "precio": 7990,
      "titulo": "Café Illy 250gr",
      "imagen": "./cafe.jpg",
      "descripcion": "Café colombiano de selección, grano tostado. Disfruta del auténtico sabor y aroma del café.",
      "cantidad": 1
    },
  ];
  const productsData = [
    {
      "id": 1,
      "precio": 7990,
      "titulo": "Café Illy 250gr",
      "imagen": "./cafe.jpg",
      "descripcion": "Café colombiano de selección, grano tostado. Disfruta del auténtico sabor y aroma del café.",
      "cantidad": 1
    },
    {
      "id": 2,
      "precio": 14990,
      "titulo": "Notebook HP 14\"",
      "imagen": "./Bontadi-Espresso-Bar.jpg",
      "descripcion": "Potente y ligera notebook HP de 14 pulgadas. Ideal para el trabajo y el entretenimiento.",
      "cantidad": 1
    },
    {
      "id": 3,
      "precio": 24990,
      "titulo": "Zapatillas Nike Air Max",
      "imagen": "./Pink_Floyd_logo.jpg",
      "descripcion": "Las icónicas zapatillas Nike Air Max, brindan comodidad y estilo en cada paso.",
      "cantidad": 1
    },
    {
      "id": 4,
      "precio": 10990,
      "titulo": "Smart TV Samsung 32\"",
      "imagen": "./Pink_Floyd_logo.jpg",
      "descripcion": "Disfruta de tus series y películas favoritas con la excelente calidad de imagen de este Smart TV Samsung de 32 pulgadas.",
      "cantidad": 1
    },
    {
      "id": 5,
      "precio": 4990,
      "titulo": "Auriculares Sony WH-CH510",
      "imagen": "./Pink_Floyd_logo.jpg",
      "descripcion": "Experimenta un sonido nítido y claro con los auriculares inalámbricos Sony WH-CH510. Perfectos para escuchar música y realizar llamadas.",
      "cantidad": 1
    },
    {
      "id": 6,
      "precio": 17990,
      "titulo": "Lámpara de escritorio LED",
      "imagen": "./Pink_Floyd_logo.jpg",
      "descripcion": "Lámpara de escritorio con luz LED regulable y diseño moderno. Ideal para trabajar o estudiar cómodamente.",
      "cantidad": 1
    },
    {
      "id": 7,
      "precio": 6990,
      "titulo": "Set de 3 sartenes antiadherentes",
      "imagen": "./Pink_Floyd_logo.jpg",
      "descripcion": "Prepara deliciosas comidas con este set de 3 sartenes antiadherentes de alta calidad.",
      "cantidad": 1
    },
    {
      "id": 8,
      "precio": 4490,
      "titulo": "Reloj Casio Vintage",
      "imagen": "./Pink_Floyd_logo.jpg",
      "descripcion": "Reloj Casio estilo vintage, un accesorio clásico y elegante para complementar cualquier look.",
      "cantidad": 1
    }
  ];
  

  return (
    <Router>
      <div>
        <Navbar />
        <SeccionesOffcanvas />
        {/* <AudioChatRoom /> */}
        {/* <MiTarjeta /> */}
        {/* <Login /> */}
        {/* <SalesforceLogin /> */}
        {/* <CarouselINews images={imagesData} /> */}
        
        <ProductList products={productsData}/>
        {/* <NeckInfo /> */}
        <OperadoraAtencionCliente />
        <Footer />

        
        
        {/* <Example /> */}
        {/* <CardExample/> */}
        {/* <MyProduct/> */}
        {/* <Carrusel/> */}
        {/* <Carrusel /> */}
      </div>
    </Router>
  );
}

export default App;

