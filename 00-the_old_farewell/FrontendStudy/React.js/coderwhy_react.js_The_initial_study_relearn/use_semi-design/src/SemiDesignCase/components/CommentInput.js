import React, { PureComponent } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { TextArea } from '@douyinfe/semi-ui'
import { Button } from '@douyinfe/semi-ui'

const COmmentInputArea = styled.div`
  margin-top: 10px;
  .btn {
    margin-top: 10px;
  }
`

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      commentContent: ''
    }
  }
  render() {
    return (
      <>
        <COmmentInputArea>
          <TextArea
            value={this.state.commentContent}
            onChange={(value, e) => this.handleChange(e)}
          />
          <Button
            theme="solid"
            type="primary"
            block
            className="btn"
            onClick={e => this.addComment()}
          >
            提交评论
          </Button>
        </COmmentInputArea>
      </>
    )
  }
  handleChange(event) {
    this.setState({
      commentContent: event.target.value
    })
  }
  addComment() {
    const info = {
      id: dayjs().valueOf(),
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
      name: 'tinyRipple',
      commentContent: this.state.commentContent,
      datetime: dayjs().format('YYYY/MM/DD HH:mm:ss')
    }
    this.props.getComment(info)
    this.setState({
      commentContent: ''
    })
  }
}
