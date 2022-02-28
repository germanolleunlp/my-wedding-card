import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useImages from './useImages';
import useFonts from './useFonts';
import useMobile from './useMobile';
import Fonts from './Fonts';
import Colors from './Colors';
import Sizes from './Sizes';
import Loader from './Loader';
import Hero from './Hero';
import Welcome from './Welcome';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import GroomCard from './GroomCard';
import BrideCard from './BrideCard';
import Timeline from './Timeline';
import Gifts from './Gifts';
import InstagramFeed from './InstagramFeed';
import Countdown from './Countdown';

function App({ className }) {
  const loading = useImages();
  const active = useFonts();
  const location = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    if (!loading && location?.pathname && active) {
      const element = document.getElementById(`#${location.pathname}`);
      const offsetTop = element?.offsetTop || 0;
      const top = offsetTop - (isMobile ? 0 : Sizes.menu);
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [loading, location, active]);

  const paddingTop = isMobile ? 0 : Sizes.menu;

  return (
    <div className={className} style={{ paddingTop }}>
      <Loader show={loading || !active}>
        {isMobile ? <MobileMenu /> : <Menu />}
        <Hero />
        <Welcome />
        <GroomCard />
        <BrideCard />
        <Countdown />
        <Timeline />
        <Gifts />
        <InstagramFeed />
      </Loader>
    </div>
  );
}

const StyledApp = styled(App)`
  display: block;
  min-width: ${Sizes.screenSmallMax}px;
  font-family: ${Fonts.primary};
  background-color: ${Colors.lightgrayAlpha};
`;

export default StyledApp;
