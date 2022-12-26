import React, { Component } from 'react'

// Temp组件
class Temp extends Component {
  render() {
    return <h2>TempComponent</h2>
  }
  componentWillUnmount() {
    console.log('5---componentWillUnmount --- Temp')
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      isShow: true
    }
    console.log('1---constructor --- App')
  }
  render() {
    console.log('2---render --- App')
    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          onClick={e => {
            this.increment()
          }}
        >
          +1
        </button>
        {this.state.isShow && <Temp />}
        <button
          onClick={e => {
            this.removeTempComponent()
          }}
        >
          Remove TempComponent
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log('3---componentDidMount --- App')
  }
  componentDidUpdate() {
    console.log('4---componentDidUpdate --- App')
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  removeTempComponent() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
