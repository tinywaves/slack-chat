import React, { useState, useLayoutEffect } from 'react';

export default function App() {
  const [number, setNumber] = useState(10);

  useLayoutEffect(() => {
    if (number === 0) {
      setNumber(5);
    }
  }, [number]);

  return (
    <>
      <h2>number: {number}</h2>
      <button onClick={() => setNumber(0)}>change number</button>
    </>
  );
}
