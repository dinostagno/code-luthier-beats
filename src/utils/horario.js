import { HORARIO } from '../config';

const NOMBRES_DIA = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

// Día (0-6) y hora decimal actuales en la zona horaria de la tienda
function ahoraEnZona(fecha, zona) {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: zona, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
  }).formatToParts(fecha);
  const get = (t) => partes.find((p) => p.type === t).value;
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { dia, hora: Number(get('hour')) + Number(get('minute')) / 60 };
}

// { abierto, texto } para mostrar el estado de atención
export function estadoAtencion(fecha = new Date(), h = HORARIO) {
  const { dia, hora } = ahoraEnZona(fecha, h.zona);
  const hoyAtiende = h.dias.includes(dia);

  if (hoyAtiende && hora >= h.abre && hora < h.cierra) {
    return { abierto: true, texto: `Abierto ahora · hasta las ${h.cierra}:00` };
  }
  if (hoyAtiende && hora < h.abre) {
    return { abierto: false, texto: `Cerrado · abrimos hoy a las ${h.abre}:00` };
  }
  // Busca el próximo día de atención
  for (let i = 1; i <= 7; i += 1) {
    const d = (dia + i) % 7;
    if (h.dias.includes(d)) {
      const cuando = i === 1 ? 'mañana' : `el ${NOMBRES_DIA[d]}`;
      return { abierto: false, texto: `Cerrado · abrimos ${cuando} ${h.abre}:00` };
    }
  }
  return { abierto: false, texto: 'Cerrado' };
}
