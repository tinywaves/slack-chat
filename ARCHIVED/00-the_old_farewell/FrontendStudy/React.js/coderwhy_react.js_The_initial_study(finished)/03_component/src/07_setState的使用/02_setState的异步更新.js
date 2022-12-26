import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello React.js'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeText()}>changeText</button>
      </div>
    )
  }
  changeText() {
    // 在React合成事件中或组件生命周期中setState是一个异步更新
    this.setState({
      message: 'React.js'
    }, () => {
      // 回调函数获取异步更新后的state
      console.log(this.state.message) // React.js
    })
    console.log(this.state.message) // Hello React.js
  }
  componentDidUpdate() {
    console.log(this.state.message) // React.js
  }
}
