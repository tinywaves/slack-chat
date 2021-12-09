import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return <span>{this.props.name}</span>
  }
}
// 返回类组件
// function enhanceApp(WrappedComponent) {
//   // 如果采用类表达式:class extends PureComponent {}在React Developer Tools的Components中显示的是父类的名字:PureComponent或者Component
//   class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
//   // 给组件赋值名称
//   NewComponent.displayName = 'tinyRipple'
//   return NewComponent
// }
// 返回函数组件
function enhanceApp(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />
  }
  NewComponent.displayName = 'tinyRipple'
  return NewComponent
}

export default enhanceApp(App)