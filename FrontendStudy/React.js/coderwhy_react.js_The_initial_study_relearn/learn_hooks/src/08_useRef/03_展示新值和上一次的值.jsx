import React, { useRef, useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <h2>previous counter: {counterRef.current}</h2>
      <h2>now counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 10)}>counter + 10</button>
    </div>
  );
}
