// render优化
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      message: 'Hello React.js'
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.changeText()}>changeText</button>
      </div>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true
    }
    return false
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  changeText() {
    this.setState({
      message: 'React.js'
    })
  }
}
