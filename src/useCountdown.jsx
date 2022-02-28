import { useState, useEffect } from 'react';
import { toDate } from 'date-fns-tz';

function getTzDate(date = new Date()) {
  return toDate(date, {
    timeZone: '	America/Argentina/Buenos_Aires'
  });
}

function useCountdown(date) {
  const targetDate = getTzDate(new Date(date));
  const currentDate = getTzDate();

  const targetTime = targetDate.getTime();
  const currentTime = currentDate.getTime();

  const [countdown, setCountdown] = useState(targetTime - currentTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(targetTime - getTzDate().getTime());
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
