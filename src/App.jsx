import React from 'react';
import Loader from './Loader';
import Hero from './Hero';
import useImages from './useImages';

function App() {
  const loading = useImages();

  return (
    <Loader show={loading}>
      <Hero />
    </Loader>
  );
}

export default App;
