import store from './store/index.js'
import {
  addAction,
  subAction,
  incrementAction,
  decrementAction
} from './store/actionCreators.js'

store.subscribe(() => {
  console.log(store.getState().counter)
})

store.dispatch(addAction(5)) // 5
store.dispatch(subAction(3)) // 2
store.dispatch(incrementAction()) // 3
store.dispatch(decrementAction()) // 2
