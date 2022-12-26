import store from './store/index.js'

function patchLogging(store) {
  const next = store.dispatch
  function dispatchLogging(action) {
    console.log(action)
    next(action) // 5
    console.log(store.getState())
  }
  store.dispatch = dispatchLogging
}

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

patchLogging(store)
patchThunk(store)

// 封装applyMiddleware
function applyMiddleware(...middleware) {
  // const newMiddleware = [...middleware]
  middleware.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}
applyMiddleware(patchLogging, patchThunk)
