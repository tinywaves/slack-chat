import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
  // 3. 检查副作用
  constructor(props) {
    super(props)
    console.log('Home===constructor')
  } 
  // 1. 不安全的生命周期函数
  UNSAFE_componentWillMount() {
    console.log('Home===componentWillMount')
  }
  // 2. 过时的refAPI(字符串方式)
  render() {
    return <div ref="title">Home</div>
  }
}
class Profile extends PureComponent {
  constructor(props) {
    super(props)
    console.log('Profile===constructor')
  } 
  UNSAFE_componentWillMount() {
    console.log('Profile===componentWillMount')
  }
  render() {
    return <div ref="title">Profile</div>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 严格模式会对Home组件开启检查,不会对Profile组件开启检查 */}
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}
