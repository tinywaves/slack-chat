import React, { useRef, useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(111);
  const counterRef = useRef(counter);

  return (
    <div>
      <h2>counter: {counter}</h2>
      <h2>counterRef: {counterRef.current}</h2>
      <button onClick={() => setCounter(counter + 10)}>counter + 10</button>
    </div>
  );
}
