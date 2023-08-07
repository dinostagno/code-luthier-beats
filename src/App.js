import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import NeckInfo from './components/NeckAdjustments';
import Footer from './components/Footer';
import Example from './components/Example';
import CardExample from './components/CardExample';
import MyProduct from './components/CardProduct';

import Carrusel from './components/CarouselComponent';
// Importa otros componentes para las rutas

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <NeckInfo />
        <Footer />
        <Example />
        <CardExample/>
        <MyProduct/>
        <Carrusel/>
        {/* <Carrusel /> */}
      </div>
    </Router>
  );
}

export default App;

