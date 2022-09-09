import React, { PureComponent } from 'react'
import styled from 'styled-components'

// 原始基类按钮
const TRoOriginalButton = styled.button`
  padding: 10px 20px;
`
// 继承于TRoOriginalButton的警告按钮
const TRoWarnButton = styled(TRoOriginalButton)`
  color: #fff;
  background-color: #f00;
`

export default class App extends PureComponent {
  render() {
    return (
      <>
        <TRoOriginalButton>TRoOriginalButton</TRoOriginalButton>
        <TRoWarnButton>TRoWarnButton</TRoWarnButton>
      </>
    )
  }
}
