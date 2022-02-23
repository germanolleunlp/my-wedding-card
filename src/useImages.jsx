import { useState, useEffect } from 'react';
import Images from './Images';

const LOADING_TIME_IN_MS = 1000;

const useImages = () => {
  const [loading, setLoading] = useState(true);
  const urls = Object.values(Images);

  useEffect(async () => {
    if (urls.length) {
      const promises = urls.map(
        url =>
          new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.src = url;
          })
      );

      await Promise.all(promises);
    }

    setTimeout(() => setLoading(false), LOADING_TIME_IN_MS);
  }, []);

  return loading;
};

export default useImages;
