import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'ADD_NUMBER':
//       return state + action.payload;
//     default:
//       return state;
//   }
// }
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}

export default function App() {
  // 传入reducer和初始化值
  // const [state, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <>
      {/* <h2>当前计数: {state}</h2> */}
      <h2>当前计数: {state.counter}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'ADD_NUMBER', payload: 10 })}>
        +10
      </button>
    </>
  );
}
