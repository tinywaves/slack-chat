import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    // 传入对象
    this.HelloRef = createRef()
    // 传入函数
    // this.HelloRef = null
  }
  render() {
    return (
      <div>
        {/* 传入字符串 */}
        {/* <h2 ref="HelloRef">Hello React.js</h2> */}
        {/* 传入对象 */}
        <h2 ref={this.HelloRef}>Hello React.js</h2>
        {/* 传入函数 */}
        {/* <h2 ref={args => this.HelloRef = args}>Hello React.js</h2> */}
        <button onClick={e => this.changeText()}>changeText</button>
      </div>
    )
  }
  changeText() {
    // 传入字符串
    // this.refs.HelloRef.innerHTML = 'Hello'
    // 传入对象
    this.HelloRef.current.innerHTML = 'Hello'
    // 传入函数
    // this.HelloRef.innerHTML = 'Hello'
  }
}
