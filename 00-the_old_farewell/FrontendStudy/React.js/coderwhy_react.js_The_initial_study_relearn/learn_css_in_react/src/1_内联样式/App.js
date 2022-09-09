import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    const pStyle = {
      fontSize: '50px'
    }
    return (
      <div>
        <h2 style={{ color: '#f00' }}>h2</h2>
        <span style={pStyle}>span</span>
      </div>
    )
  }
}
