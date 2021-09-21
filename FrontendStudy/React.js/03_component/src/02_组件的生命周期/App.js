import React, { Component } from 'react'

class Temp extends Component {
  render() {
    return <h2>Temp Component</h2>
  }
  componentWillUnmount() {
    console.log('Temp---componentWillUnmount')
  }
}

export default class App extends Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = {
      counter: 0,
      isShow: true
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>App Component</h2>
        <span>计数：{this.state.counter}</span>
        <button
          onClick={() => {
            this.btnClick()
          }}
        >
          +1
        </button>
        {this.state.isShow && <Temp />}
        <button
          onClick={() => {
            this.show()
          }}
        >
          Temp inShow
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  btnClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  show() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
