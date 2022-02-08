import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Hero from './Hero';

const LOADING_TIME_IN_MS = 2000;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME_IN_MS);
  }, []);

  return (
    <Loader show={loading}>
      <Hero />
    </Loader>
  );
}

export default App;
