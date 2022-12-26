import React, { Component } from 'react'

// 创建context对象
const UserContext = React.createContext({
  // 默认值
  name1: 'DEFAULT_NAME1',
  name2: 'DEFAULT_NAME2'
})

// 类组件
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户名1：{this.context.name1}</h2>
        <h2>用户名2：{this.context.name2}</h2>
      </div>
    )
  }
}
ProfileHeader.contextType = UserContext

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name1: 'tinyRipple',
      name2: 'zhengdonghui'
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
