import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello React.js',
      name: 'tinyRipple'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.changeText()}>changeText</button>
      </div>
    )
  }
  changeText() {
    this.setState({
      message: 'React.js'
    })
  }
}
