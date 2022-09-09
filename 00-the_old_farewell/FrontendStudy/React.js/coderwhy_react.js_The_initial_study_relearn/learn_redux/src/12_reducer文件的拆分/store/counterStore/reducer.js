import { INCREMENT, DECREMENT } from './constants';

const initialCounterState = {
  counter: 0
};

export default function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
