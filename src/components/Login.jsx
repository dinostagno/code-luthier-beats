// import React from 'react';
// import { Card, Form, Button, Container } from 'react-bootstrap';

// const Login = () => {
//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh', background: 'linear-gradient(to bottom, #f0e6f5, #c7a4e0)' }}>
//       <Card style={{ width: '400px' }}>
//         <Card.Body>
//           <div className="d-flex justify-content-center mb-4">
//             <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
//               <img src="./franco.jpg" alt="Logo" style={{ width: '60px', height: '60px' }} />
//             </div>
//           </div>
//           <h3 className="text-center mb-4">Iniciar sesión</h3>
//           <Form>
//             <Form.Group className="mb-3" controlId="email">
//               <Form.Label>Correo electrónico</Form.Label>
//               <Form.Control type="email" placeholder="Ingresa tu correo" />
//             </Form.Group>
//             <Form.Group className="mb-4" controlId="password">
//               <Form.Label>Contraseña</Form.Label>
//               <Form.Control type="password" placeholder="Ingresa tu contraseña" />
//             </Form.Group>
//             <Button variant="primary" type="submit" block>
//               Iniciar sesión
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const Login = () => {
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      // Realizar solicitud de autorización a la API de Salesforce
      const response = await fetch('https://login.salesforce.com/services/oauth2/authorize', {
        method: 'POST',
        body: JSON.stringify({
          grant_type: 'authorization_code',
          code: 'CODIGO_DE_AUTORIZACION',
          client_id: 'TU_CONSUMER_KEY',
          redirect_uri: 'TU_CALLBACK_URL',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.access_token);
      } else {
        console.error('Error de autenticación');
      }
    } catch (error) {
      console.error('Error en la solicitud de autorización', error);
    }
  };

  return (
    <div>
      {!token ? (
        <button onClick={handleLogin}>Iniciar sesión con Salesforce</button>
      ) : (
        <div>
          <p>¡Inicio de sesión exitoso!</p>
          {/* Aquí puedes usar el token para realizar llamadas a la API de Salesforce */}
        </div>
      )}
    </div>
  );
};

export default Login;

