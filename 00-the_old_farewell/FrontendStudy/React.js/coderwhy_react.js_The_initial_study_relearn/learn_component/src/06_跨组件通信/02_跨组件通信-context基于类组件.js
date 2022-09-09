import React, { Component } from 'react'

// 创建Context对象
const UserContext = React.createContext({
  // 默认值
  name1: 'defaultName1',
  name2: 'defaultName2'
})

class ComponentTestHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户名1：{this.context.name1}</h2>
        <h2>用户名2：{this.context.name2}</h2>
      </div>
    )
  }
}
ComponentTestHeader.contextType = UserContext

function ComponentTest() {
  return (
    <div>
      <ComponentTestHeader />
      <span>Component</span>
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
        {/* value为需要共享的数据 */}
        <UserContext.Provider value={this.state}>
          <ComponentTest />
        </UserContext.Provider>
      </div>
    )
  }
}
