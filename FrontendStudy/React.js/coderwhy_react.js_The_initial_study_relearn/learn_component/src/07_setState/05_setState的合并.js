import React, { Component } from 'react'

export default class App extends Component {
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
    // React内部会对setState传入的对象进行合并,因此即使使用三次setState最终结果也只会+1
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // 对操作进行累加
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}
