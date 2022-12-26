import { createStore, applyMiddleware, compose } from 'redux'
import saga from 'redux-saga'

import reducer from './reducer'
import sagaProject from './saga'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

// 创建saga中间件
const sagaMiddleware = saga()
// 应用中间件
const storeEnhancer = applyMiddleware(sagaMiddleware)
// 创建store对象
const store = createStore(reducer, composeEnhancers(storeEnhancer))
// 激活saga中间件,必须要在store的创建之后
sagaMiddleware.run(sagaProject)

export default store
