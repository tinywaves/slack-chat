import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import './style.css'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isOn: true
    }
  }
  render() {
    return (
      <>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={this.state.isOn ? 'on' : 'off'}
            classNames="btn"
            timeout={300}
          >
            <button onClick={() => this.changeOn()}>
              {this.state.isOn ? 'ON' : 'OFF'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </>
    )
  }
  changeOn() {
    this.setState({
      isOn: !this.state.isOn
    })
  }
}
