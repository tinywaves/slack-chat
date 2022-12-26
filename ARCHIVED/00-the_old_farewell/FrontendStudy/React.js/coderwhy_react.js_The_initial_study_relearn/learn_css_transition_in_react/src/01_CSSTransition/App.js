import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card, Popover, Avatar } from '@douyinfe/semi-ui'
import { IconInfoCircle } from '@douyinfe/semi-icons'

import './style.css'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  render() {
    const { Meta } = Card
    return (
      <>
        <button onClick={e => this.changeShow()}>
          CSSTransition Show/Hide
        </button>
        <CSSTransition
          in={this.state.isShow}
          classNames="css-transition"
          timeout={300}
          unmountOnExit={true}
          appear
          onEnter={ele => {
            console.log('onEnter', ele)
          }}
          onEntering={ele => {
            console.log('onEntering', ele)
          }}
          onEntered={ele => {
            console.log('onEntered', ele)
          }}
          onExit={ele => {
            console.log('onExit', ele)
          }}
          onExiting={ele => {
            console.log('onExiting', ele)
          }}
          onExited={ele => {
            console.log('onExited', ele)
          }}
        >
          <Card
            style={{ maxWidth: 360 }}
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Meta
              title="Semi Doc"
              avatar={
                <Avatar
                  size="default"
                  src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg"
                />
              }
            />
            <Popover
              position="top"
              showArrow
              content={<article style={{ padding: 6 }}>这是一个 Card</article>}
            >
              <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
            </Popover>
          </Card>
        </CSSTransition>
      </>
    )
  }
  changeShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
