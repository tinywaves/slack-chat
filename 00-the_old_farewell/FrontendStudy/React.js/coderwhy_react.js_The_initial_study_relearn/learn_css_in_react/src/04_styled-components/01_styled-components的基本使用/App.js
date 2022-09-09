import React, { PureComponent } from 'react'
import styled from 'styled-components'

const AppDiv = styled.div`
  color: #f00;
  /* 支持嵌套 */
  .title-class {
    text-decoration: underline;
  }
  span {
    color: blue;
    /* &表示当前元素 */
    &.span-title {
      color: black;
    }
    /* 支持伪类 */
    &:hover {
      color: #fff;
    }
    &::after {
      /* 支持伪元素 */
      content: 'test';
    }
  }
`

export default class App extends PureComponent {
  render() {
    return (
      <AppDiv>
        <h2 className="title-class">App</h2>
        <span>A </span>
        <span className="span-title">B </span>
        <span>C </span>
      </AppDiv>
    )
  }
}
