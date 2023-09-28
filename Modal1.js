import React, { useEffect, useState } from 'react';
import soundFile from './sounds/your-sound-file.mp3';

const Modal = ({ data }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(false);
      window.location.reload();
    }, 25000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const audio = new Audio(soundFile);
    audio.autoplay = true;
    audio.preload = 'auto';
  
    const playSound = () => {
      audio.play();
    };
  
    if (showModal) {
      playSound();
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div>
      <div className="container" style={{ background: 'green', borderRadius: '15px' }}>
        <h1 id='er450' className="container" style={{ color: 'black', fontSize: '110px', padding: '40px' }}>
          🚀 {data} 🍾
        </h1>
      </div>
    </div>
  );
};

export default Modal;