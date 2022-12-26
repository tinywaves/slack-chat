import React, { PureComponent } from 'react'
import moment from 'moment'
import { Input, Button } from 'antd'
const { TextArea } = Input

export default class CommentInput extends PureComponent {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }
  render() {
    return (
      <div>
        <TextArea
          rows={4}
          value={this.state.content}
          onChange={e => this.handleChange(e)}
        />
        <Button type="primary" onClick={e => this.addComment()}>
          添加评论
        </Button>
      </div>
    )
  }
  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      nickname: 'tinyRipple',
      time: moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo)
    this.setState({
      content: ''
    })
  }
  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }
}
