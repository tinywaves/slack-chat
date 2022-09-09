import React, { PureComponent } from 'react'
import styled from 'styled-components'

import CommentInput from './components/CommentInput'
import CommentItem from './components/CommentItem'

const DivStyle = styled.div`
  width: 500px;
  padding: 20px;
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
      <DivStyle>
        {this.state.commentList.map((item, index) => (
          <CommentItem
            comment={item}
            key={item.id}
            removeComment={() => this.removeComment(index)}
          />
        ))}
        <CommentInput submitComment={info => this.submitComment(info)} />
      </DivStyle>
    )
  }
  submitComment(info) {
    this.setState({
      commentList: [info, ...this.state.commentList]
    })
  }
  removeComment(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }
}
