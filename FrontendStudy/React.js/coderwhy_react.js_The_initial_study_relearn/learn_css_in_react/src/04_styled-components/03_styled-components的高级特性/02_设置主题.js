import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const TempComponentStyled = styled.h2`
  /* 获取ThemeProvider共享的数据 */
  color: ${props => props.theme.themeColor};
`

class TempComponent extends PureComponent {
  render() {
    return <TempComponentStyled>TempComponentStyled</TempComponentStyled>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: '#ff0', fontSize: '25px' }}>
        <TempComponent />
      </ThemeProvider>
    )
  }
}
