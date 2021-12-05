import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Home from '../Home'
import Profile from '../Profile'

const ButtonStyle = styled.button`
  padding: 10px 20px;
  color: #f00;
`
// 继承
const PrimaryButtonStyle = styled(ButtonStyle)`
  /* padding: 10px 20px; */
  color: #fff;
  background-color: #f00;
`

export default class App extends PureComponent {
  render() {
    return (
      // 主题共享
      <ThemeProvider theme={{ themeColor: '#ff0', textDecoration: 'underline' }}>
        <Home />
        <Profile />
        <ButtonStyle>ButtonStyle</ButtonStyle>
        <PrimaryButtonStyle>PrimaryButtonStyle</PrimaryButtonStyle>
      </ThemeProvider>
    )
  }
}
