// Catálogo de la tienda. Única fuente de datos para el carrusel y la grilla.
// `imagen` es relativa a /public · `precio` en CLP · `destacado` lo muestra en el carrusel.
const productos = [
  {
    id: 'illy-classico',
    categoria: 'cafe',
    nombre: 'illy Classico',
    formato: 'Molido · 250 g',
    descripcion: 'Tostado clásico, 100% arábica. Pensado para cafetera moka.',
    precio: 7990,
    imagen: 'cafe.jpg',
    destacado: true,
  },
  {
    id: 'bontadi-puro',
    categoria: 'cafe',
    nombre: 'Bontadi Puro Caffè',
    formato: 'Grano entero',
    etiqueta: 'Tostaduría italiana desde 1790',
    descripcion: 'La tradición de una de las tostadurías más antiguas de Italia.',
    precio: 14990,
    imagen: 'Bontadi-Espresso-Bar.jpg',
    destacado: true,
  },
  {
    id: 'lavazza-gusto-forte',
    categoria: 'cafe',
    nombre: 'Lavazza Gusto Forte',
    formato: 'Grano entero · 1 kg',
    descripcion: 'Intensidad 10. Cuerpo pleno para un espresso con carácter.',
    precio: 24990,
    imagen: 'forte.jpg',
    destacado: true,
  },
];

export const CATEGORIAS = [
  { id: 'todos', label: 'Todo' },
  { id: 'cafe', label: 'Café' },
  { id: 'te', label: 'Té' },
];

export const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

export default productos;
