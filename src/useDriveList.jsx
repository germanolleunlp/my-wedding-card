import { useState, useEffect } from 'react';

const { REACT_APP_GOOGLE_API_KEY: API_KEY } = process.env;
const PAGE_SIZE = 1000;

function useDriveList({ parentId, conditions = [], fields = '*' }) {
  const [state, setState] = useState({
    data: [],
    loading: false
  });

  useEffect(() => {
    setState({ loading: true });
    const base = [`'${parentId}' in parents`];
    const q = encodeURIComponent([...base, ...conditions].join(' and '));
    const f = encodeURIComponent(fields);
    const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${f}&pageSize=${PAGE_SIZE}&key=${API_KEY}`;

    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setState({ loading: false, data });
      })
      .catch(console.error);
  }, [parentId]);

  return state;
}

export default useDriveList;
