import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import Fonts from './Fonts';

const families = Object.values(Fonts);

const useFonts = () => {
  const [active, setActive] = useState(false);
  const onActive = () => setActive(true);

  useEffect(() => {
    WebFont.load({
      google: { families },
      active: onActive
    });
  }, []);

  return active;
};

export default useFonts;
