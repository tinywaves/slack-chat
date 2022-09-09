import React, { PureComponent } from 'react'
import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar, content, time } = this.props.comment
    return (
      <div>
        <Comment
          author={<a href="/#">{nickname}</a>}
          avatar={<Avatar src={avatar} alt={nickname} />}
          content={<p>{content}</p>}
          datetime={
            <Tooltip title={time.format('YYYY-MM-DD HH:mm:ss')}>
              <span>{time.fromNow()}</span>
            </Tooltip>
          }
          actions={[
            <span onClick={() => this.removeComment()}>
              <DeleteOutlined />
              删除
            </span>
          ]}
        />
      </div>
    )
  }
  removeComment() {
    this.props.removeComment()
  }
}
