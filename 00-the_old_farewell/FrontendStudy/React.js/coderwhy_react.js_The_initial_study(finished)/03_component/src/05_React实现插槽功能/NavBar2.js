import React, { Component } from 'react'

import './navBar.css'

export default class NavBar2 extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className="nav-bar">
        <div className="nav-item left">{leftSlot}</div>
        <div className="nav-item center">{centerSlot}</div>
        <div className="nav-item right">{rightSlot}</div>
      </div>
    )
  }
}
