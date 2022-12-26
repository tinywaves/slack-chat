import store from './store/index.js'
import { addAction, subAction, increment, decrement } from './store/actionCreators.js'

// 订阅store
store.subscribe(() => {
  console.log(store.getState())
})

// 派发actions
store.dispatch(addAction(10))
store.dispatch(subAction(5))
store.dispatch(increment())
store.dispatch(decrement())
