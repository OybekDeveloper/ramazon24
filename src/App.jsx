import React, { useEffect, useState } from 'react';
import logo from './logo/logo.png';
import Typewriter from 'typewriter-effect';

const App = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinut, setTimerMinut] = useState("00");
  const [timerSecond, setTimerSecond] = useState("00");
  const [intervalId, setIntervalId] = useState(null);
  const startTimer = () => {
    const ramazonDate = new Date('March 11, 2024 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime(); // Corrected: use getTime() to get current time in milliseconds
      const distance = ramazonDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimerDays(String(days).padStart(2, '0'));
        setTimerHours(String(hours).padStart(2, '0'));
        setTimerMinut(String(minutes).padStart(2, '0'));
        setTimerSecond(String(seconds).padStart(2, '0'));
      } else {
        clearInterval(interval);
      }
    }, 1000);
    
    setIntervalId(interval); // Save the interval id to state
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalId); // Clear interval using stored id
  }, [intervalId]);
  return (
    <div className='flex flex-col h-screen relative'>
      <div className="navbar">
        <div className='flex flex-start gap-3 items-center p-3'>
          <img width={30} src={logo} alt="" />
          <h1 className='text-3xl text-[rgb(254,206,133)] font-bold '>Ramazon24</h1>
        </div>
      </div>
      <div className="header flex justify-center items-center flex-col pt-[60px]">
        <h1 className='text-4xl text-white font-bold kalam-bold'>Ramazon 2024</h1>
        <p className='kalam-light flex flex-col justify-center items-center text-white max-sm:text-xl max-md:text-2xl max-sm:p-10 text-3xl pt-[30px]'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: ["Assalomu Alaykum va Rahmatulloh va Barakatuh.", "Muborak Ramazon oyigacha qolgan vaqt:"]
            }}
          />
          <span className='text-xl '></span>
        </p>
        <div className="timer text-white flex max-sm:grid  flex-row max-sm:grid-cols-2 justify-center items-center gap-24 text-8xl max-sm:text-7xl  pt-[40px]">
          <div className="day flex flex-col justify-center items-center">
            <span>{timerDays}</span>
            <span className='text-4xl pt-[20px]'>kun</span>
          </div>
          <div className="hour flex flex-col justify-center items-center">
            <span>{timerHours}</span>
            <span className='text-4xl pt-[20px]'>soat</span>
          </div>
          <div className="minut flex flex-col justify-center items-center">
            <span>{timerMinut}</span>
            <span className='text-4xl pt-[20px]'>mint</span>
          </div>
          <div className="secound flex flex-col justify-center items-center">
            <span>{timerSecond}</span>
            <span className='text-4xl pt-[20px]'>soniya</span>
          </div>
        </div>
      </div>
      <div className="footer flex flex-row items-center justify-between text-white p-3 left-0 bottom-0 absolute bg-[rgb(31,31,31)] w-full">
        <div className="text ">
          <span>Copyright 2024 | Powered by </span><strong className='text-[rgb(254,206,133)]'> CoderBux</strong>
        </div>
        <div className='flex flex-start gap-3 items-center p-3'>
          <img width={30} src={logo} alt="" />
          <h1 className='text-3xl text-[rgb(254,206,133)] font-bold '>Ramazon24</h1>
        </div>
      </div>
    </div>
  );
};

export default App;