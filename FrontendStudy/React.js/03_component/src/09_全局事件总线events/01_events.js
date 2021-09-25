import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

// 创建eventBus
const eventBus = new EventEmitter()

class Home extends PureComponent {
  componentDidMount() {
    // 添加全局事件监听
    eventBus.addListener('sayReact', (message) => {
      console.log(message)
    })
  }
  componentWillUnmount() {
    // 卸载全局事件监听
    eventBus.removeAllListeners('sayReact')
  }
  render() {
    return <div>HOME</div>
  }
}
class Profile extends PureComponent {
  render() {
    return (
      <div>
        PROFILE
        <button onClick={() => this.emitEvent()}>PROFILE</button>
      </div>
    )
  }
  emitEvent() {
    eventBus.emit('sayReact', 'Hello React.js')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}
