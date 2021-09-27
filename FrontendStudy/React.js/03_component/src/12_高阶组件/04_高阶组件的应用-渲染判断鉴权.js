import React, { PureComponent } from 'react'

function withAuth(WrapperComponent) {
  const NewComponent =  props => {
    const { isLogin } = props
    if (isLogin) {
      return <WrapperComponent {...props} />
    } else {
      return <LoginPage />
    }
  }
  NewComponent.displayName = 'AuthComponent'
  return NewComponent
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
const CartPageAuth = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CartPageAuth isLogin={false} />
      </div>
    )
  }
}
