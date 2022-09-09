import React, { Component } from 'react'

import './navBar.css'

export default class NavBar1 extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-item left">{this.props.children[0]}</div>
        <div className="nav-item center">{this.props.children[1]}</div>
        <div className="nav-item right">{this.props.children[2]}</div>
      </div>
    )
  }
}
