// 1.导入redux
const redux = require('redux')

const initState = {
  counter: 0
}

// reducer
function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.number }
    case 'SUB_NUMBER':
      return { ...state, counter: state.counter - action.number }
    default:
      return state
  }
}

// store,传入reducer
const store = redux.createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
  console.log('state.counter 改变', store.getState().counter)
})

// actions
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', number: 2 }
const action4 = { type: 'SUB_NUMBER', number: 1 }

// 派发actions
store.dispatch(action1) // 1
store.dispatch(action2) // 0
store.dispatch(action3) // 2
store.dispatch(action4) // 1
