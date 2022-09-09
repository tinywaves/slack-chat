import React, { Component } from 'react'

export default class AppClass extends Component {
  constructor() {
    super()
    this.state = {
      message: 'tinyRipple'
    }
  }
  render() {
    return (
      <div>
        <h2>AppClass</h2>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}
