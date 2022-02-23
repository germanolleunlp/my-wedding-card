import React from 'react';
import useImages from './useImages';
import Loader from './Loader';
import Hero from './Hero';
import Header from './Header';
import GroomCard from './GroomCard';
import BrideCard from './BrideCard';

function App() {
  const loading = useImages();

  return (
    <Loader show={loading}>
      <Hero />
      <Header />
      <GroomCard />
      <BrideCard />
    </Loader>
  );
}

export default App;
