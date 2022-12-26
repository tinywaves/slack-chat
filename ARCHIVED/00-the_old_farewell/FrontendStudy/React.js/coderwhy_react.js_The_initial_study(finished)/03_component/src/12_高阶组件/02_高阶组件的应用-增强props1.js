import React, { PureComponent } from 'react'

// 定义高阶组件
function enhanceRegionProps(WrapperComponent) {
  return props => {
    return <WrapperComponent {...props} region="china" />
  }
}

class Home extends PureComponent {
  render() {
    return <h2>HOME：{`nickname:${this.props.nickname}-level:${this.props.level}-region:${this.props.region}`}</h2>
  }
}
const EnhanceHome = enhanceRegionProps(Home)
class About extends PureComponent {
  render() {
    return <h2>ABOUT：{`nickname:${this.props.nickname}-level:${this.props.level}-region:${this.props.region}`}</h2>
  }
}
const EnhanceAbout = enhanceRegionProps(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="tinyRipple" level={5} />
        <EnhanceAbout nickname="zhengdonghui" level={4} />
      </div>
    )
  }
}

export default App
