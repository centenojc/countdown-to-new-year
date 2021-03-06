import React, { useEffect, useState } from "react";
import "./App.css";
import Fireworks from "./Fireworks";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear() + 1;
    const difference = +new Date(`01/01/${year}`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear() + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="timer">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="container">
      Countdown to {year}
      <div className="timer-flex">
        {timerComponents.length ? timerComponents : <Fireworks />}
      </div>
    </div>
  );
}

export default App;
