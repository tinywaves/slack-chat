import React, { useEffect, useState } from 'react'

export default function EffectHook1() {
  const [counter, setCounter] = useState(0) 
  useEffect(() => {
    console.log('订阅操作')
    return () => {
      console.log('quxiaodingyue')
    }
  })

  return (
    <div>
      <h2>计数: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
