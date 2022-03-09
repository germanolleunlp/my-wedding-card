import { useEffect, useState } from 'react';

const useSize = size => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSize = windowDimension <= size;
  return isSize;
};

export default useSize;
