/**
 * Redux的使用
 */
const redux = require('redux')

// 创建初始对象用于保存状态(state)
const initialState = {
  counter: 0
}

// 创建store用于存储state,创建store时必须传入reducer
const store = redux.createStore(reducer)

// 创建actions,通常action中带有type属性,也可以携带其他的数据
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', number: 5 }
const action4 = { type: 'SUB_NUMBER', number: 3 }

// reducer,reducer是一个纯函数,不能直接修改state,需要进行解构赋值
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.number }
    case 'SUB_NUMBER':
      return { ...state, counter: state.counter - action.number }
    default:
      return state
  }
}

// 在派发actions之前订阅store的修改
store.subscribe(() => {
  // 通过store.getState()获取当前的state
  console.log(store.getState().counter)
})

// 通过dispatch派发actions
store.dispatch(action1) // 1
store.dispatch(action2) // 0
store.dispatch(action3) // 5
store.dispatch(action4) // 2
