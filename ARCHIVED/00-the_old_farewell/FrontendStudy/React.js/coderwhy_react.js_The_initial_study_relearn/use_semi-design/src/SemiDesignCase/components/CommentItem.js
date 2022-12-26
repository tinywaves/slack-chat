import React, { PureComponent } from 'react'
import { Card, Avatar, Typography } from '@douyinfe/semi-ui'

export default class CommentItem extends PureComponent {
  render() {
    const { Meta } = Card
    const { Text } = Typography
    const { info } = this.props

    return (
      <Card
        style={{ maxWidth: 340 }}
        title={
          <Meta
            title={info.name}
            description={info.datetime}
            avatar={<Avatar size="default" src={info.avatar} />}
          />
        }
        headerExtraContent={
          <Text link onClick={e => this.removeComment()}>
            删除
          </Text>
        }
      >
        {info.commentContent}
      </Card>
    )
  }
  removeComment() {
    this.props.removeComment()
  }
}
