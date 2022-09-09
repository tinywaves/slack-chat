import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(() => 10);

  const handleCounter1 = () => {
    // 最终结果会+10
    setCounter(counter + 10);
    setCounter(counter + 10);
    setCounter(counter + 10);
  };

  const handleCounter2 = () => {
    // 最终结果会+30
    setCounter(preValue => preValue + 10);
    setCounter(preValue => preValue + 10);
    setCounter(preValue => preValue + 10);
  };

  return (
    <>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(preValue => preValue + 10)}>+10</button>
      <button onClick={handleCounter1}>+10</button>
      <button onClick={handleCounter2}>+30</button>
    </>
  );
}
