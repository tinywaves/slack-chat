import React, { PureComponent } from 'react'

import Home from '../Home'
import './style.css'

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="title">h2</h2>
        <Home />
      </div>
    )
  }
}
