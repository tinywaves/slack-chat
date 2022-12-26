import React, { Component, createRef } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.refDom = createRef()
  }
  render() {
    return (
      <div>
        <Counter ref={this.refDom} />
        <button onClick={() => this.printBtnClick()}>打印Counter-Ref</button>
      </div>
    )
  }
  printBtnClick() {
    // 打印出组件对象
    console.log(this.refDom.current)
  }
}
