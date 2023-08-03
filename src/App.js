import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import NeckInfo from './components/NeckAdjustments';
import Footer from './components/Footer';
import Carrusel from './components/CarouselComponent';
// Importa otros componentes para las rutas

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <NeckInfo />
        <Footer />
        <Carrusel />
      </div>
    </Router>
  );
}

export default App;

