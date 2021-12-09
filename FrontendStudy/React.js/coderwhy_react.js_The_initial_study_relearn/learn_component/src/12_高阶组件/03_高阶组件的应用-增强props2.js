import React, { PureComponent, createContext } from 'react'

// 创建Context
const UserContext = createContext({
  name: 'DEFAULT_NAME',
  id: 'DEFAULT_ID',
  region: 'DEFAULT_REGION'
})

// 定义高阶组件统一使用Context共享数据,减少代码冗余
function withUser(WrapperComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrapperComponent {...props} {...user} />
          }
        }
      </UserContext.Consumer>
    )
  }
}


class Home extends PureComponent {
  render() {
    return <h2>Home---{`name:${this.props.name}, id:${this.props.id}, region:${this.props.region}`}</h2>
  }
}
class About extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.id}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <span>App</span>
        <UserContext.Provider value={{ name: 'tinyRipple', id: 2001, region: 'China' }}>
          <UserHome />
          <UserAbout />
        </UserContext.Provider>
      </div>
    )
  }
}
