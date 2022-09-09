import React, { PureComponent } from 'react'

import store from '../store/index'
import { incrementAction, addAction } from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  render() {
    return (
      <>
        <h2>Home</h2>
        <h3>计数：{this.state.counter}</h3>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addCounter(5)}>+5</button>
      </>
    )
  }
  increment() {
    store.dispatch(incrementAction())
  }
  addCounter(number) {
    store.dispatch(addAction(number))
  }
  componentDidMount() {
    // state的变化不是通过setState因此不会重新调用render方法,因此页面不会变化
    // 在挂载时订阅store的变化,只要store发生变化即调用setState更新state并重新调用render方法重新渲染页面
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe()
  }
}
