import React, { PureComponent, createContext } from 'react'

// 定义高阶组件
function withUser(WrapperComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {user => {
          return <WrapperComponent {...props} {...user} />
        }}
      </UserContext.Consumer>
    )
  }
}

// 创建Context
const UserContext = createContext({
  nickname: 'DEFAULT',
  level: -1,
  region: 'DEF_REGION'
})

class Home extends PureComponent {
  render() {
    return <h2>HOME：{`nickname:${this.props.nickname}-level:${this.props.level}-region:${this.props.region}`}</h2>
  }
}
const UserHome = withUser(Home)

class About extends PureComponent {
  render() {
    return <h2>ABOUT：{`nickname:${this.props.nickname}-level:${this.props.level}-region:${this.props.region}`}</h2>
  }
}
const UserAbout = withUser(About)

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}
const UserDetail = withUser(Detail)

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ nickname: 'tinyRipple', level: 5, region: 'china' }}>
          <UserHome />
          <UserAbout />
          <UserDetail />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
