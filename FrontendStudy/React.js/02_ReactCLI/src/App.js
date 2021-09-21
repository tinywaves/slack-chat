import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>App Component---{this.state.counter}</h2>
        <button onClick={() => {this.btnClick()}}>+1</button>
      </div>
    )
  }
  btnClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}