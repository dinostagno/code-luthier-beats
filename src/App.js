import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import Carrusel from './components/CarouselComponent';
// Importa otros componentes para las rutas

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Carrusel />
      </div>
    </Router>
  );
}

export default App;

