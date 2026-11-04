import React, { useEffect, useState } from 'react';
import catalogo, { CATEGORIAS } from '../data/productos';
import ProductCard from './ProductCard';
import './ProductList.css';

// Los enlaces #cafe y #te de la barra activan el filtro correspondiente
const categoriaDesdeHash = () => {
  const hash = window.location.hash.slice(1);
  return CATEGORIAS.some((c) => c.id === hash) ? hash : 'todos';
};

function ProductList({ productos = catalogo, onAgregar }) {
  const [categoria, setCategoria] = useState(categoriaDesdeHash);

  useEffect(() => {
    const sync = () => setCategoria(categoriaDesdeHash());
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const visibles = categoria === 'todos'
    ? productos
    : productos.filter((p) => p.categoria === categoria);

  return (
    <section className="clb-products" aria-labelledby="clb-products-title">
      {/* Anclas de navegación (la sección tiene un solo id posible) */}
      <span id="cafe" className="clb-anchor" />
      <span id="te" className="clb-anchor" />

      <div className="clb-products__inner">
        <header className="clb-products__header">
          <h2 id="clb-products-title">
            La tienda. <span>Café y té seleccionados.</span>
          </h2>

          <div className="clb-segmented" role="tablist" aria-label="Filtrar por categoría">
            {CATEGORIAS.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={categoria === c.id}
                className={categoria === c.id ? 'is-active' : ''}
                onClick={() => setCategoria(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </header>

        {visibles.length > 0 ? (
          <div className="clb-products__grid">
            {visibles.map((p) => (
              <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
            ))}
          </div>
        ) : (
          <p className="clb-products__empty">Nuestra selección de tés llega pronto.</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;
