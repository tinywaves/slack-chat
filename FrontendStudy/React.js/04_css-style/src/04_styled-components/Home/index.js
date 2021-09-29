import React, { PureComponent } from 'react'

import { HomeStyle, DivEndStyle } from './style'

export default class App extends PureComponent {
  render() {
    return (
      <HomeStyle>
        <div className="start">Home-start</div>
        <DivEndStyle className="end">Home-end</DivEndStyle>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </HomeStyle>
    )
  }
}
