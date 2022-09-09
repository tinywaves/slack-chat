import store from './store/index.js'
import { addAction } from './store/actionCreators.js'

store.subscribe(() => {
  console.log(store.getState().counter)
})

// 方法1,每一次的dispatch操作都需要添加这样的逻辑代码,存在大量冗余
// console.log(addAction(5))
// store.dispatch(addAction(5)) // 5
// console.log(store.getState())
// 方法2,将相关代码封装到一个独立的函数中,需要额外使用一个函数,使用不方便
// function dispatchLogging(action) {
//   console.log(action)
//   store.dispatch(action) // 5
//   console.log(store.getState())
// }
// dispatchLogging(addAction(5))
// 方法3,Monkey Patching
// const next = store.dispatch
// function dispatchLogging(action) {
//   console.log(action)
//   next(action) // 5
//   console.log(store.getState())
// }
// store.dispatch = dispatchLogging
// store.dispatch(addAction(5))
// 方法4,将Monkey Patching进行封装
function patchLogging(store) {
  const next = store.dispatch
  function dispatchLogging(action) {
    console.log(action)
    next(action) // 5
    console.log(store.getState())
  }
  store.dispatch = dispatchLogging
}
patchLogging(store)
store.dispatch(addAction(5))
