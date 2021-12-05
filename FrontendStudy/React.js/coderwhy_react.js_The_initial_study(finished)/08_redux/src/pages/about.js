import React, { PureComponent } from 'react'

import store from '../store'
import { subAction, decrement } from '../store/actionCreators'

export default class about extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.sunNumber(5)}>-5</button>
        <button onClick={() => this.decrement()}>-1</button>
      </div>
    )
  }
  sunNumber(step) {
    store.dispatch(subAction(step))
  }
  decrement() {
    store.dispatch(decrement())
  }
}
