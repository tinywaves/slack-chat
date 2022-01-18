import React, { useEffect, useState } from 'react'

export default function EffectHook1() {
  const [counter, setCounter] = useState(0) 
  useEffect(() => {
    document.title = counter
  })

  return (
    <div>
      <h2>计数: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
