import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import destacados from '../data/destacados';
import './HeroCarousel.css';

const INTERVALO_MS = 6000;
const UMBRAL_SWIPE_PX = 50;

function HeroCarousel({ slides = destacados }) {
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const toqueInicioX = useRef(null);
  const total = slides.length;

  const ir = useCallback((i) => setActivo((i + total) % total), [total]);

  // Avance automático; se detiene con hover/foco o si el usuario prefiere menos movimiento
  useEffect(() => {
    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (pausado || reducirMovimiento || total < 2) return undefined;
    const id = setTimeout(() => ir(activo + 1), INTERVALO_MS);
    return () => clearTimeout(id);
  }, [activo, pausado, total, ir]);

  // Gestos táctiles: deslizar para cambiar de slide
  const onTouchStart = (e) => { toqueInicioX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (toqueInicioX.current === null) return;
    const dx = e.changedTouches[0].clientX - toqueInicioX.current;
    if (Math.abs(dx) > UMBRAL_SWIPE_PX) ir(activo + (dx < 0 ? 1 : -1));
    toqueInicioX.current = null;
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') ir(activo + 1);
    if (e.key === 'ArrowLeft') ir(activo - 1);
  };

  return (
    <section
      className="clb-hero"
      aria-roledescription="carrusel"
      aria-label="Productos destacados"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      <div className="clb-hero__track">
        {slides.map((s, i) => (
          <article
            key={s.id}
            className={`clb-hero__slide ${i === activo ? 'is-active' : ''}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${total}`}
            aria-hidden={i !== activo}
          >
            <div className="clb-hero__text">
              <p className="clb-hero__eyebrow">{s.etiqueta}</p>
              <h2 className="clb-hero__title">{s.titulo}</h2>
              <p className="clb-hero__desc">{s.descripcion}</p>
              <div className="clb-hero__ctas">
                <a href="#cafe" className="clb-hero__btn" tabIndex={i === activo ? 0 : -1}>Comprar</a>
                <a href="#cafe" className="clb-hero__link" tabIndex={i === activo ? 0 : -1}>Ver más ›</a>
              </div>
            </div>
            <img
              className="clb-hero__img"
              src={`${import.meta.env.BASE_URL}${s.imagen}`}
              alt={s.titulo}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </article>
        ))}
      </div>

      {total > 1 && (
        <div className="clb-hero__controls">
          <button type="button" className="clb-hero__arrow" onClick={() => ir(activo - 1)} aria-label="Anterior">
            <FiChevronLeft />
          </button>
          <div className="clb-hero__dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`clb-hero__dot ${i === activo ? 'is-active' : ''}`}
                onClick={() => ir(i)}
                aria-label={`Ir a ${s.titulo}`}
                aria-current={i === activo}
              />
            ))}
          </div>
          <button type="button" className="clb-hero__arrow" onClick={() => ir(activo + 1)} aria-label="Siguiente">
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default HeroCarousel;
