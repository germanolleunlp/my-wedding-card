import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const LOADING_TIME_IN_MS = 2000;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME_IN_MS);
  }, []);

  return (
    <div>
      <Loader show={loading} />
    </div>
  );
}

export default App;
