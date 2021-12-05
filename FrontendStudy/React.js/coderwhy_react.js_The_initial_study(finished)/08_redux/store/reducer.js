import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants.js'

const initState = {
  counter: 0
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.number }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.number }
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

export default reducer
