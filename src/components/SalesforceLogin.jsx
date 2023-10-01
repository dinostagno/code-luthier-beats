import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de importar Axios

function SalesforceLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Hacer una solicitud POST a la URL de OAuth de Salesforce utilizando Axios
      const response = await axios.post(
        'https://login.salesforce.com/services/oauth2/token',
        `grant_type=password&client_id=3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn&client_secret=5CC14D5C61AB61C49E16DE550455A03AFB12B578F88B32D548BD5585F5707E54&username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        // El objeto 'data' contiene el token de acceso que puedes usar para autenticar las solicitudes a Salesforce.
        console.log('Token de acceso:', data.access_token);
      } else {
        console.error('Error de autenticación');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión en Salesforce</h2>
      <form>
        <div>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default SalesforceLogin;
