import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import NeckInfo from './components/NeckAdjustments';
// import Carrusel from './components/CarouselComponent';
// Importa otros componentes para las rutas

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <NeckInfo />
      </div>
    </Router>
  );
}

export default App;

