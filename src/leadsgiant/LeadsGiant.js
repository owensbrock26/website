import React, { useEffect, useState } from 'react';
import './LeadsGiant.css'; // import a CSS file for this component

function LeadsGiant() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-01`) - +new Date();
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
  }

  return (
    <div className="leads-giant">
      <div className="timer">
        {timeLeft.days ? `${timeLeft.days} Days ` : ''}
        {timeLeft.hours ? `${timeLeft.hours} Hours ` : ''}
        {timeLeft.minutes ? `${timeLeft.minutes} Minutes ` : ''}
        {timeLeft.seconds ? `${timeLeft.seconds} Seconds` : ''}
      </div>
    </div>
  );
}

export default LeadsGiant;