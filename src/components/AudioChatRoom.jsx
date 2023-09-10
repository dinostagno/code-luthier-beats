import React, { useEffect, useRef, useState } from 'react';

function AudioChatRoom() {
  const localAudioRef = useRef(null);
  const remoteAudiosRef = useRef([]);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);

  useEffect(() => {
    const initializeRoom = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setLocalStream(stream);
        localAudioRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error al iniciar la captura de audio:', error);
      }
    };

    initializeRoom();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const addRemoteStream = (stream) => {
    setRemoteStreams([...remoteStreams, stream]);
  };

  return (
    <div>
      <h1>Sala de Chat de Audio</h1>
      <div>
        <h2>Tu Audio</h2>
        <audio ref={localAudioRef} autoPlay controls />
      </div>
      <div>
        <h2>Audio de Otros Usuarios</h2>
        {remoteStreams.map((remoteStream, index) => (
          <div key={index}>
            <audio ref={(ref) => (remoteAudiosRef.current[index] = ref)} autoPlay controls />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudioChatRoom;
