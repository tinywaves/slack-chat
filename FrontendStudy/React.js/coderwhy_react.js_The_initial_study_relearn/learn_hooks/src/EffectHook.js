import React, { useState } from 'react'

export default function EffectHook() {
  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(18)
  const [array, setArray] = useState(['A', 'B', 'C'])
  const [friends, setFriends] = useState(['initialState', 'AAA', 'BBBB'])
  return (
    <div>
      {/* <h2>计数: {counter}</h2>
      <h2>age: {age}</h2>
      <ul>
        {
          array.map(item => {
            return <li>{item}</li>
          })
        }
      </ul>
      <br /> */}

      <ul>
        {friends.map(item => {
          return <li>{item}</li>
        })}
      </ul>
      {/* <button onClick={e => setFriends([...friends, 'ttt'])}>
        add friends
      </button> */}
      <button onClick={e => setFriends([...friends, 'ttt'])}>
        add friends
      </button>
    </div>
  )
}
