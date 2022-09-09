import React from 'react';

import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [name, setName] = useLocalStorage('name');

  return (
    <>
      <button onClick={() => setName('tinyRipple')}>setName</button>
      <h2>name: {name}</h2>
    </>
  );
}
