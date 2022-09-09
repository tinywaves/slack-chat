import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants'

const initialState = {
  counter: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.number }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.number }
    default:
      return state
  }
}
