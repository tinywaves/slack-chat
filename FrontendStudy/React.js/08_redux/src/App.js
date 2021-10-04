import React, { PureComponent } from 'react'

import Home from './pages/home'
import About from './pages/about'
import HomeConnect from './pages/homeConnect'
import AboutConnect from './pages/aboutConnect'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
        <hr />
        <HomeConnect />
        <AboutConnect />
      </div>
    )
  }
}
