import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useImages from './useImages';
import Loader from './Loader';
import Hero from './Hero';
import Header from './Header';
import GroomCard from './GroomCard';
import BrideCard from './BrideCard';

function App() {
  const loading = useImages();
  const location = useLocation();

  useEffect(() => {
    if (!loading && location?.pathname) {
      const element = document.getElementById(`#${location.pathname}`);
      element?.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }, [loading, location]);

  return (
    <Loader show={loading}>
      <Hero />
      <Header />
      <section id="#/couple">
        <GroomCard />
        <BrideCard />
      </section>
    </Loader>
  );
}

export default App;
