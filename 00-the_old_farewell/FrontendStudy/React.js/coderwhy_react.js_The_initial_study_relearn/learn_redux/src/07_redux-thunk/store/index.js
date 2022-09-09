import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

// 应用中间件
const storeEnhancer = applyMiddleware(thunk)

export default createStore(reducer, composeEnhancers(storeEnhancer))
