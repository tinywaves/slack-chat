import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App:{this.props.name}
      </div>
    )
  }
}
App.displayName = 'tinyRipple'

// 返回类组件
// function enhanceApp(WrappedComponent) {
//   class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
//   NewComponent.displayName = 'ZDH'
//   return NewComponent
// }
// 返回函数组件
function enhanceApp(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />
  }
  NewComponent.displayName = 'ZDH'
  return NewComponent
}

export default enhanceApp(App)
