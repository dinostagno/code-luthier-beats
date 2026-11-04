import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { formatoPrecio } from '../data/productos';

function ProductCard({ producto, onAgregar }) {
  const { nombre, formato, descripcion, precio, imagen } = producto;

  return (
    <article className="clb-card">
      <div className="clb-card__media">
        <img src={`${import.meta.env.BASE_URL}${imagen}`} alt={nombre} loading="lazy" />
      </div>
      <div className="clb-card__body">
        <p className="clb-card__format">{formato}</p>
        <h3 className="clb-card__name">{nombre}</h3>
        <p className="clb-card__desc">{descripcion}</p>
        <div className="clb-card__footer">
          <span className="clb-card__price">{formatoPrecio.format(precio)}</span>
          <button
            type="button"
            className="clb-card__add"
            onClick={() => onAgregar?.(producto)}
            aria-label={`Agregar ${nombre} al carrito`}
          >
            <FiPlus /> Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
