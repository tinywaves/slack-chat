import React, { PureComponent } from 'react'
import styled from 'styled-components'

const InputStyle = styled.input.attrs({
  placeholder: 'tinyRipple',
  borderColor: '#f00'
})`
  background-color: #ff0;
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
`

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'orange'
    }
  }
  render() {
    return (
      <div>
        <InputStyle type="text" color={this.state.color} />
      </div>
    )
  }
}
