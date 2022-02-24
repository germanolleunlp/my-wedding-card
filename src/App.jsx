import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useImages from './useImages';
import useFonts from './useFonts';
import Loader from './Loader';
import Hero from './Hero';
import Welcome from './Welcome';
import Header from './Header';
import GroomCard from './GroomCard';
import BrideCard from './BrideCard';
import Fonts from './Fonts';
import Colors from './Colors';

function App({ className }) {
  const loading = useImages();
  const active = useFonts();
  const location = useLocation();

  useEffect(() => {
    if (!loading && location?.pathname && active) {
      const element = document.getElementById(`#${location.pathname}`);
      element?.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }, [loading, location, active]);

  return (
    <div className={className}>
      <Loader show={loading || !active}>
        <Hero />
        <Header />
        <Welcome />
        <section id="#/couple">
          <GroomCard />
          <BrideCard />
        </section>
      </Loader>
    </div>
  );
}

const StyledApp = styled(App)`
  display: block;
  font-family: ${Fonts.primary};
  background-color: ${Colors.lightgrayAlpha};
`;

export default StyledApp;
