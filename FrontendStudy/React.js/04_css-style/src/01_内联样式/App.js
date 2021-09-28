import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: '#f00'
    }
  }
  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: 'underline'
    }
    return (
      <div>
        <h2 style={{ fontSize: '50px', color: '#f00' }}>h2</h2>
        <p style={pStyle}>p</p>
      </div>
    )
  }
}
