import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import './style.css'

const { Meta } = Card

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
      <>
        <button onClick={() => this.changeShow()}>
          {this.state.isShow ? '隐藏' : '显示'}
        </button>
        <CSSTransition
          in={this.state.isShow}
          classNames="card"
          timeout={300}
          unmountOnExit={true}
          appear
          onEnter={ele => {console.log('onEnter', ele)}}
          onEntering={ele => {console.log('onEntering', ele)}}
          onEntered={ele => {console.log('onEntered', ele)}}
          onExit={ele => {console.log('onExit', ele)}}
          onExiting={ele => {console.log('onExiting', ele)}}
          onExited={ele => {console.log('onExited', ele)}}
        >
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={
              [
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />, 
                <EllipsisOutlined key="ellipsis" />
              ]
            }
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
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
