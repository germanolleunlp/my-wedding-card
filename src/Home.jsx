import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSize from './useSize';
import Hero from './Hero';
import Welcome from './Welcome';
import Us from './Us';
import Timeline from './Timeline';
import Gifts from './Gifts';
import Countdown from './Countdown';
import DressCode from './DressCode';
import Help from './Help';
import Confirm from './Confirm';
import Sizes from './Sizes';

function Home({ loading, theme }) {
  const location = useLocation();
  const isMediumSize = useSize(Sizes.screenMediumMax);

  useEffect(() => {
    if (!loading && location?.pathname) {
      const element = document.getElementById(`#${location.pathname}`);
      const offsetTop = element?.offsetTop || 0;
      const top = offsetTop - (isMediumSize ? 0 : Sizes.menu);
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [loading, location]);

  return (
    <>
      <Hero />
      <Welcome />
      <Us />
      <Countdown />
      <DressCode theme={theme} />
      <Timeline theme={theme} />
      <Confirm />
      <Gifts />
      <Help />
    </>
  );
}

export default Home;
