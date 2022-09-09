import React, { PureComponent } from 'react'

import Home from './pages/Home'
import About from './pages/About'

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Home />
        <hr />
        <About />
      </>
    )
  }
}
