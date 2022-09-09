import React, { Component } from 'react'

// 创建context对象
const UserContext = React.createContext({
  // 默认值
  name1: 'DEFAULT_NAME1',
  name2: 'DEFAULT_NAME2'
})
const ThemeContext = React.createContext({
  color: '#f00'
})

// 多个context的使用
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {value => {
        return (
          <ThemeContext.Consumer>
            {color => {
              return (
                <div>
                  <h2 style={{color: color.color}}>用户名1：{value.name1}</h2>
                  <h2>用户名2：{value.name2}</h2>
                  <h2>颜色：{color.color}</h2>
                </div>
              )
            }}
          </ThemeContext.Consumer>
        )
      }}
    </UserContext.Consumer>
  )
}

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
          <ThemeContext.Provider value={{ color: '#ff0' }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
