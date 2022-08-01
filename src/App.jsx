import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import party from 'party-js';
import { light, dark } from './themes';
import useImages from './useImages';
import useFonts from './useFonts';
import useSize from './useSize';
import Fonts from './Fonts';
import Sizes from './Sizes';
import Loader from './Loader';
import Hero from './Hero';
import Welcome from './Welcome';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import Us from './Us';
import Timeline from './Timeline';
import Gifts from './Gifts';
import Countdown from './Countdown';
import DressCode from './DressCode';
import Help from './Help';
import Places from './Places';
import ThemeButton from './ThemeButton';

function App({ className }) {
  useFonts();
  const loading = useImages();
  const location = useLocation();
  const isMediumSize = useSize(Sizes.screenMediumMax);
  const [theme, setTheme] = useState(light);

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

  useEffect(() => {
    document.body.addEventListener('click', event => {
      party.confetti(event);
    });
  }, []);

  const paddingTop = isMediumSize ? 0 : Sizes.menu;

  const toggleTheme = () => {
    if (theme.name === dark.name) {
      setTheme(light);
      return;
    }

    setTheme(dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className={className}
        style={{ paddingTop, backgroundColor: theme.colors.backgroundOne }}
      >
        <Loader show={loading}>
          {isMediumSize ? <MobileMenu /> : <Menu />}
          <Hero />
          <Welcome />
          <Us />
          <Countdown />
          <DressCode theme={theme} />
          <Timeline theme={theme} />
          <Gifts />
          <Help />
          <Places />
          <ThemeButton theme={theme} onClick={toggleTheme} />
        </Loader>
      </div>
    </ThemeProvider>
  );
}

const StyledApp = styled(App)`
  display: block;
  min-width: ${Sizes.screenSmallMax}px;
  font-family: ${Fonts.primary};
`;

export default StyledApp;
