import React, { PureComponent } from 'react'

import Home from '../Home'
import Profile from '../Profile'

import appStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>App</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}
