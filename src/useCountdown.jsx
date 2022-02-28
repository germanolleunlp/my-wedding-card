import { useState, useEffect } from 'react';

function useCountdown(date) {
  const targetTime = new Date(date).getTime();
  const currentTime = new Date().getTime();
  const [countdown, setCountdown] = useState(targetTime - currentTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(targetTime - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  }

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

export default useCountdown;
