import store from './store/index.js'
import { addAction, subAction } from './store/actionCreators.js'

store.subscribe(() => {
  console.log(store.getState().counter)
})

function patchThunk(store) {
  const next = store.dispatch
  function dispatchThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  store.dispatch = dispatchThunk
}
patchThunk(store)
store.dispatch(addAction(5)) // 5
store.dispatch((dispatch, getState) => {
  dispatch(subAction(10)) // -5
})
