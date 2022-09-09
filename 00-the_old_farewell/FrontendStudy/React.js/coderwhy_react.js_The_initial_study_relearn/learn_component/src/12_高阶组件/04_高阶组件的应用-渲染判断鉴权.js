import React, { PureComponent } from 'react'

// 鉴权渲染高阶组件
function withAuth(WrapperComponent) {
  return props => {
    const { isLogin } = props
    if (isLogin) {
      return <WrapperComponent {...props} />
    } else {
      return <LoginPage />
    }
  }
}

class LoginPage extends PureComponent {
  render() {
    return <h2>LoginPage</h2>
  }
}

class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>
  }
}
const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 若传递的isLogin为true则跳转至CartPage,若为false则跳转至LoginPage */}
        <AuthCartPage isLogin={false} />
      </div>
    )
  }
}
