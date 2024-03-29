import React, { useEffect, useState } from 'react';
import logo from './logo/logo.png';
import Typewriter from 'typewriter-effect';

const App = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinut, setTimerMinut] = useState();
  const [timerSecond, setTimerSecond] = useState();
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const ramazonDate = new Date('2024-03-11T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
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
        console.log('ramazonDate:', ramazonDate);
        console.log('now:', now);
        console.log('distance:', distance);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    setIntervalId(interval);
  };

  useEffect(() => {
    const startTimerAndSetIntervalId = () => {
      startTimer();

      const interval = setInterval(() => {

      }, 1000);

      setIntervalId(interval);
    };

    startTimerAndSetIntervalId();

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);



  return (
    <div className='flex flex-col min-h-screen relative '>
      <div className="navbar p-5 w-full ">
        <div className='flex flex-start gap-3 items-center '>
          <img width={30} src={logo} alt="" />
          <h1 className='text-3xl max-sm:text-2xl text-[rgb(254,206,133)] font-bold '>Ramazon24</h1>
        </div>
      </div>
      <div className="header flex justify-center items-center flex-col pt-[80px] max-sm:pt-[40px] pb-[100px]">
        <h1 className='text-5xl text-white font-bold kalam-bold'>Ramazon 2024</h1>
        <div className="typewriter-container h-[120px]">
          <p className='kalam-light flex flex-col justify-center items-center text-white max-sm:text-2xl max-md:text-3xl max-sm:p-10 text-4xl pt-[50px]'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ["Assalomu Alaykum va Rahmatulloh va Barakatuh.", "Muborak Ramazon oyigacha qolgan vaqt:"]
              }}
            />
            <span className='text-xl'></span>
          </p>
        </div>
        <div className="timer text-white flex max-sm:flex-col  flex-row max-sm:grid-cols-2 justify-center items-center gap-24 max-sm:gap-10 text-8xl max-sm:text-6xl  pt-[50px] max-sm:pt-[20px]">
          <div className="day flex flex-col justify-center items-center">
            <span>{timerDays ? timerDays : "00"}</span>
            <span className='text-4xl max-sm:text-2xl pt-[20px]'>kun</span>
          </div>
          <div className='max-sm:flex hidden justify-center items-center gap-4 text-4xl'>
            <div className=" hour flex flex-col justify-center items-center">
              <span>{timerHours ? timerHours : "00"} :</span>
            </div>
            <div className=" minut flex flex-col justify-center items-center">
              <span>{timerMinut ? timerMinut : "00"} :</span>
            </div>
            <div className=" secound flex flex-col justify-center items-center">
              <span>{timerSecond ? timerSecond : "00"}</span>
              </div>
          </div>
          <div className="max-sm:hidden hour flex flex-col justify-center items-center">
            <span>{timerHours ? timerHours : "00"}</span>
            <span className='text-4xl max-sm:text-2xl pt-[20px]'>soat</span>
          </div>
          <div className="max-sm:hidden minut flex flex-col justify-center items-center">
            <span>{timerMinut ? timerMinut : "00"}</span>
            <span className='text-4xl max-sm:text-2xl pt-[20px]'>minut</span>
          </div>
          <div className="max-sm:hidden secound flex flex-col justify-center items-center">
            <span>{timerSecond ? timerSecond : "00"}</span>
            <span className='text-4xl max-sm:text-2xl'>soniya</span>
          </div>
        </div>
      </div>
      <div className="footer fixed flex max-sm:flex-col mb-0 pb-0 items-center justify-around max-sm:justify-center text-white p-3 left-0 bottom-0 w-full bg-[rgb(20,20,20)]">
        <div className="text">
          <span>Copyright 2024 | Powered by </span><strong className='text-[rgb(254,206,133)]'> CoderBux</strong>
        </div>
        <div className='flex  flex-start gap-3 items-center py-3'>
          <img width={30} src={logo} alt="" />
          <h1 className='text-3xl text-[rgb(254,206,133)] font-bold '>Ramazon24</h1>
        </div>
      </div>

    </div>
  );
};

export default App;
