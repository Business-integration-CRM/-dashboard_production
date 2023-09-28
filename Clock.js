import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Функция для обновления времени и даты
    const tick = () => {
      setDate(new Date());
    };

    // Запуск функции каждую секунду
    const timerID = setInterval(() => tick(), 500);

    // Очистка таймера при размонтировании компонента
    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Форматирование времени и даты
  const options = { timeZone: 'Asia/Novosibirsk' };
  const time = date.toLocaleTimeString('ru-RU', options);
  const currentDate = date.toLocaleDateString('ru-RU', options);

  return (
    <div class="container"> <div class="text-center">  <h2>{time} {currentDate}</h2> </div> </div> 
  );
}

export default Clock;