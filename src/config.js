// Configuración general de la tienda.
// Número de WhatsApp en formato internacional, sin "+" ni espacios (ej: 56912345678).
// Vacío: WhatsApp pide al usuario elegir el contacto.
export const WHATSAPP_NUMERO = '';
export const HORARIO_ATENCION = 'Lunes a viernes, 9:00 a 18:00';

export const linkWhatsApp = (texto) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
