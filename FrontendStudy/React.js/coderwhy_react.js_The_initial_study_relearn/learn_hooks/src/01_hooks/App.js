import React, { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h2>计数: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+</button>
      <button onClick={e => setCounter(counter - 1)}>-</button>
    </>
  )
}
