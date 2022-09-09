import React, { PureComponent } from 'react'

import store from '../store'
import { addAction, increment } from '../store/actionCreators'

export default class home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    // 订阅
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
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.addNumber(5)}>+5</button>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
  addNumber(step) {
    // 派发
    store.dispatch(addAction(step))
  }
  increment() {
    store.dispatch(increment())
  }
}
