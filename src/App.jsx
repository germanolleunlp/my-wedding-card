import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useImages from './useImages';
import useFonts from './useFonts';
import Fonts from './Fonts';
import Colors from './Colors';
import Sizes from './Sizes';
import Loader from './Loader';
import Hero from './Hero';
import Welcome from './Welcome';
import Menu from './Menu';
import GroomCard from './GroomCard';
import BrideCard from './BrideCard';
import Timeline from './Timeline';
import Gifts from './Gifts';

function App({ className }) {
  const loading = useImages();
  const active = useFonts();
  const location = useLocation();

  useEffect(() => {
    if (!loading && location?.pathname && active) {
      const element = document.getElementById(`#${location.pathname}`);
      if (element?.offsetTop) {
        window.scrollTo({
          top: element.offsetTop - Sizes.menu,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }, [loading, location, active]);

  return (
    <div className={className}>
      <Loader show={loading || !active}>
        <Menu />
        <Hero />
        <Welcome />
        <GroomCard />
        <BrideCard />
        <Timeline />
        <Gifts />
      </Loader>
    </div>
  );
}

const StyledApp = styled(App)`
  display: block;
  min-width: ${Sizes.screenSmallMin}px;
  font-family: ${Fonts.primary};
  background-color: ${Colors.lightgrayAlpha};
  padding-top: ${Sizes.menu}px;
`;

export default StyledApp;
