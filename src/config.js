// Configuración general de la tienda.
export const NOMBRE_TIENDA = 'Code Luthier Beats';

// Número de WhatsApp en formato internacional, sin "+" ni espacios (ej: 56912345678).
// Vacío: WhatsApp pide al usuario elegir el contacto.
export const WHATSAPP_NUMERO = '';
export const HORARIO_ATENCION = 'Lunes a viernes, 9:00 a 18:00';

// Horario estructurado para calcular "Abierto/Cerrado" (hora de Chile).
// dias: 0 = domingo … 6 = sábado · horas en formato 24 h
export const HORARIO = { zona: 'America/Santiago', dias: [1, 2, 3, 4, 5], abre: 9, cierra: 18 };

// Mensajes de la franja bajo la barra (rotan cada pocos segundos)
export const AVISOS = [
  `Atención al cliente: ${HORARIO_ATENCION}`,
  'Despacho a todo Chile, incluidas regiones',
  'Haz tu pedido fácil por WhatsApp',
];

export const linkWhatsApp = (texto) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
