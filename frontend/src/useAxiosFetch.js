// useAxiosFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useAxiosFetch;
