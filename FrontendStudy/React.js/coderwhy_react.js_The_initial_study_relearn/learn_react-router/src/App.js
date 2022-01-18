import React, { PureComponent } from 'react'
import { HashRouter, Link, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/home">HOme</Link>
          <Link to="/about">Ablout</Link>

          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </HashRouter>
      </div>
    )
  }
}
