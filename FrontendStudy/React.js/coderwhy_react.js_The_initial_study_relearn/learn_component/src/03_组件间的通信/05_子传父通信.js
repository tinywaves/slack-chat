import React, { Component } from 'react'

class IncrementButton extends Component {
  render() {
    const { btnIncrementClick } = this.props
    return <button onClick={btnIncrementClick}>+1</button>
  }
}

export default class ShowCount extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>count:{this.state.counter}</h2>
        <IncrementButton btnIncrementClick={e => this.increment()} />
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
