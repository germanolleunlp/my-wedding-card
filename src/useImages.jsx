import { useState, useEffect } from 'react';
import Images from './Images';

const LOADING_TIME_IN_MS = 1500;

const useImages = () => {
  const [loading, setLoading] = useState(true);
  const urls = Object.values(Images);

  useEffect(() => {
    let loaded = false;

    if (!urls.length) {
      loaded = true;
    } else {
      const promises = urls.map(
        url =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = error => reject(error);
            img.src = url;
          })
      );

      Promise.all(promises).then((successUrls = []) => {
        loaded = successUrls.length === urls.length;
      });
    }

    setTimeout(() => setLoading(!loaded), LOADING_TIME_IN_MS);
  }, []);

  return loading;
};

export default useImages;
