import React, { PureComponent } from 'react'

// 定义高阶组件给组件统一添加一个相同的属性,不会破坏原有的JSX代码结构
function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="China" />
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home---{`name:${this.props.name}, id:${this.props.id}, region:${this.props.region}`}</h2>
  }
}
class About extends PureComponent {
  render() {
    return <h2>About---{`name:${this.props.name}, id:${this.props.id}, region:${this.props.region}`}</h2>
  }
}
const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <span>App</span>
        <EnhanceHome name="tinyRipple" id={1001} />
        <EnhanceAbout name="zhengdonghui" id={2001} />
      </div>
    )
  }
}
