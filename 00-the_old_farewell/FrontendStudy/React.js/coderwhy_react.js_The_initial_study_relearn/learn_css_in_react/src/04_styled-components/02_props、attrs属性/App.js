import React, { PureComponent } from 'react'
import styled from 'styled-components'

const TRInput = styled.input.attrs({
  // 可以使用attrs设置相关属性
  placeholder: 'tinyRipple',
  borderColor: '#f00'
})`
  background-color: lightblue;
  /* 获取attrs中定义的属性 */
  border-color: ${props => props.borderColor};
  /* 获取this.state中定义的值 */
  color: ${props => props.text_color};
`

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      textColor: '#f00'
    }
  }
  render() {
    return (
      // styled-components设置的props具有穿透特性,即给TRInput设置的属性会穿透映射至input
      <TRInput type="text" text_color={this.state.textColor} />
    )
  }
}
