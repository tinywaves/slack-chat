import React, { PureComponent } from 'react'
import styled from 'styled-components'

import CommentItem from './components/CommentItem'
import CommentInput from './components/CommentInput'

const MainDiv = styled.div`
  width: 335px;
  text-align: center;
`

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <MainDiv>
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              info={item}
              key={item.id}
              removeComment={e => this.removeComment(index)}
            />
          )
        })}
        <CommentInput getComment={this.addComment.bind(this)} />
      </MainDiv>
    )
  }
  addComment(info) {
    this.setState({
      commentList: [info, ...this.state.commentList]
    })
  }
  removeComment(index) {
    this.setState({
      commentList: this.state.commentList.filter(
        (item, indey) => index !== indey
      )
    })
  }
}
