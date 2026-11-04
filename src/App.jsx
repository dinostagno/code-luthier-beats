import React from 'react';
import Navbar from './components/CustomNavbar';
import HeroCarousel from './components/HeroCarousel';
import ProductList from './components/ProductList';
import OperadoraAtencionCliente from './components/OperadoraAtencionCliente';
import Footer from './components/Footer';

function App() {
  return (
    <div id="inicio">
      <Navbar />
      <main>
        <HeroCarousel />
        {/* TODO: pasar onAgregar cuando exista el carrito */}
        <ProductList />
      </main>
      <OperadoraAtencionCliente />
      <Footer />
    </div>
  );
}

export default App;
