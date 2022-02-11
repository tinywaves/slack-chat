import { useEffect, useState } from 'react';

export default function useLocalStorage(key) {
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem(key))
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}
