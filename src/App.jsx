import React from 'react';
import Navbar from './components/CustomNavbar';
import HeroCarousel from './components/HeroCarousel';
import ProductList from './components/ProductList';
import AtencionCliente from './components/AtencionCliente';
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
      <AtencionCliente />
      <Footer />
    </div>
  );
}

export default App;
