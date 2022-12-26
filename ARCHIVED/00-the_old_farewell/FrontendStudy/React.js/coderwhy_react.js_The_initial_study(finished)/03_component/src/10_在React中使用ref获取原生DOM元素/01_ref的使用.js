import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.refDom = createRef()
    this.refEle = null
  }
  render() {
    return (
      <div>
        {/* 传入字符串 */}
        {/* <h2 ref="refDom">Hello React.js</h2> */}
        {/* 传入函数 */}
        {/* <h2 ref={args => (this.refEle = args)}>Hello React.js</h2> */}
        {/* 传入对象（推荐使用） */}
        <h2 ref={this.refDom}>Hello React.js</h2>
        <button onClick={() => this.changeText()}>changeText</button>
      </div>
    )
  }
  changeText() {
    // 传入字符串
    // this.refs.refDom.innerHTML = 'React.js'
    // 传入函数
    // this.refEle.innerHTML = 'React.js'
    // 传入对象
    this.refDom.current.innerHTML = 'React.js'
  }
}
