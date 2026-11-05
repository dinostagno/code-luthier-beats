import React, { useEffect, useState } from 'react';
import catalogo, { CATEGORIAS } from '../data/productos';
import { LuLeaf } from 'react-icons/lu';
import ProductCard from './ProductCard';
import Logo from './Logo';
import './ProductList.css';

// Café usa el grano del logo de la tienda; té, una hoja
const IconoCafe = () => <Logo size="1em" />;
const ICONOS = { cafe: IconoCafe, te: LuLeaf };
const FILTROS = CATEGORIAS.filter((c) => c.id !== 'todos');

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

  // Tocar el filtro activo lo desactiva y vuelve a mostrar todo
  const alternar = (id) => setCategoria((actual) => (actual === id ? 'todos' : id));

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

          {/* Filtros de ícono (activar/desactivar); sin selección se muestra todo */}
          <div className="clb-filter" role="group" aria-label="Filtrar por categoría">
            {FILTROS.map((c) => {
              const Icono = ICONOS[c.id];
              const activo = categoria === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={activo}
                  aria-label={c.label}
                  title={activo ? `${c.label} · tocar para ver todo` : c.label}
                  className={activo ? 'is-active' : ''}
                  onClick={() => alternar(c.id)}
                >
                  <Icono aria-hidden="true" />
                </button>
              );
            })}
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
