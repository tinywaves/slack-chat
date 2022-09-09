import React, { PureComponent } from 'react'

import store from '../store/index'
import { decrementAction, subAction } from '../store/actionCreators'

export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  render() {
    return (
      <>
        <h2>About</h2>
        <h3>计数：{this.state.counter}</h3>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.sunCounter(5)}>-5</button>
      </>
    )
  }
  decrement() {
    store.dispatch(decrementAction())
  }
  sunCounter(number) {
    store.dispatch(subAction(number))
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
}
