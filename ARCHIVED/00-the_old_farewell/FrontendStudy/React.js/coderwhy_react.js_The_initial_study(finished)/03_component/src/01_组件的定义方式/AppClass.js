import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'tinyRipple'
    }
  }
  render() {
    return (
      <div>
        <h2>AppClass Component</h2>
        <h2>{ this.state.message }</h2>
      </div>
    )
  }
}
