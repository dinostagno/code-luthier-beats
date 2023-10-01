import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css'; // Importa el archivo CSS con tus estilos personalizados

const OperadoraAtencionCliente = () => {
  const handleClick = () => {
    // Lógica para abrir el chat de atención al cliente
    // Aquí puedes implementar la funcionalidad de tu chat o redirigir a una página de chat
    console.log('¡Has hecho clic en la imagen de diálogo!');
  };

  return (
    <div className="operadora-container">
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="tooltip">Atención al Cliente</Tooltip>}
      >
        <div id="operadora" className="operadora-icon" onClick={handleClick}>
          <img
            src="./bot.png" // Reemplaza con la ruta de tu imagen
            alt="Imagen de diálogo"
            class="bot-style"
          />
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default OperadoraAtencionCliente;

