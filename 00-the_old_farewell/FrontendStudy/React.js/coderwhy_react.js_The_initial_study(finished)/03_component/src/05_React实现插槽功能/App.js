import React, { Component } from 'react'

import NavBar1 from './NavBar1'
import NavBar2 from './NavBar2'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar1>
          <span>span-left</span>
          <span>span-center</span>
          <span>span-right</span>
        </NavBar1>
        <NavBar2
          leftSlot={<span>span-left</span>}
          centerSlot={<span>span-center</span>}
          rightSlot={<span>span-right</span>}
        />
      </div>
    )
  }
}
