import React, { useEffect, useState } from 'react';
import { SpeechableSpan } from 'react-speech-synthesis';

const Modal = ({ data }) => {
  const [showModal, setShowModal] = useState(true);
  const [displayModal, setDisplayModal] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(false);
      setDisplayModal(false);
      // Перезагрузить страницу
      window.location.reload();
    }, 25000); // Установить задержку в 25 секунд

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const speakText = () => {
      if ('speechSynthesis' in window) {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(data);
        speechSynthesis.speak(utterance);
      } else {
        console.error('Speech synthesis is not supported in this browser.');
      }
    };

    if (displayModal) {
      speakText();
    }
  }, [data, displayModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div>
      <div className="container" style={{ background: 'green', borderRadius: '15px' }}>
        <h1 style={{ color: 'black' }}>
          🚀 <SpeechableSpan text={data} /> {data} 🍾
        </h1>
      </div>
    </div>
  );
};

export default Modal;