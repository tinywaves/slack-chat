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
        <button id="btn">改变文本</button>
      </div>
    )
  }
  changeText() {
    // 在setTimeout中setState是同步更新
    setTimeout(() => {
      this.setState({
        message: 'React.js'
      })
      console.log(this.state.message)
    }, 0);
  }
  componentDidMount() {
    // 在原生DOM事件中setState是同步更新
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        message: 'React.js'
      })
      console.log(this.state.message)
    })
  }
}