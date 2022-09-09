import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

// 1.创建EventEmitter对象
const eventBus = new EventEmitter()

class Action extends PureComponent {
  render() {
    return <button onClick={e => this.messageGiven()}>传递给Show组件一个消息</button>
  }
  messageGiven() {
    // 2.发射事件:eventBus.emit('事件名称', 参数列表)
    eventBus.emit('messageGive', 'The message that Action passes to Show is:', 'Hello React.js')
  }
}

class Show extends PureComponent {
  componentDidMount() {
    // 3.监听事件:eventBus.addListener('事件名称', 监听函数)
    eventBus.addListener('messageGive', this.handleListener)
  }
  componentWillUnmount() {
    // 4.移除事件:eventBus.removeListener('事件名称', 监听函数)
    eventBus.removeListener('messageGive', this.handleListener)
  }
  // 监听函数
  handleListener(args, message) {
    console.log(args, message)
  }
  render() {
    return <div></div>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Action />
        <Show />
      </div>
    )
  }
}
