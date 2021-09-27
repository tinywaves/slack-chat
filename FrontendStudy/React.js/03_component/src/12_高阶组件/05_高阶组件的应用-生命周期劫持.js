import React, { PureComponent } from 'react'

function withRenderTime(WrapperComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }
    componentDidMount() {
      this.endTime = Date.now()
      console.log(`${this.props.name}的渲染时间：${this.endTime - this.beginTime}`)
    }
    render() {
      return <WrapperComponent {...this.props} />
    }
  }
}

// class Home extends PureComponent {
//   // 即将渲染
//   UNSAFE_componentWillMount() {
//     this.beginTime = Date.now()
//   }
//   render() {
//     return <h2>HOME</h2>
//   }
//   // 渲染结束
//   componentDidMount() {
//     this.endTime = Date.now()
//     console.log(`HOME的渲染时间：${this.endTime - this.beginTime}`)
//   }
// }
// class About extends PureComponent {
//   UNSAFE_componentWillMount() {
//     this.beginTime = Date.now()
//   }
//   render() {
//     return <h2>ABOUT</h2>
//   }
//   componentDidMount() {
//     this.endTime = Date.now()
//     console.log(`ABOUT的渲染时间：${this.endTime - this.beginTime}`)
//   }
// }
class Home extends PureComponent {
  render() {
    return <h2>HOME</h2>
  }
}
const TimeHome = withRenderTime(Home)
class About extends PureComponent {
  render() {
    return <h2>ABOUT</h2>
  }
}
const TimeAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome name='HOME' />
        <TimeAbout name='ABOUT' />
      </div>
    )
  }
}
