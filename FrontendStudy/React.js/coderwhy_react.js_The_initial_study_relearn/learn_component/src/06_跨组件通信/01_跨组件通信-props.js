import React, { Component } from 'react'

function ComponentTestHeader(props) {
  return (
    <div>
      <h2>用户名1：{props.name1}</h2>
      <h2>用户名2：{props.name2}</h2>
    </div>
  )
}

function ComponentTest(props) {
  // const { name1, name2 } = props
  return (
    <div>
      {/* <ComponentTestHeader name1={name1} name2={name2} /> */}
      <ComponentTestHeader {...props} />
      <span>Component</span>
    </div>
  )
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name1: 'tinyRipple',
      name2: 'zhengdonghui'
    }
  }
  render() {
    return (
      <div>
        {/* 使用解构语法简化书写 */}
        {/* <ComponentTest name1={this.state.name1} name2={this.state.name2} /> */}
        <ComponentTest {...this.state} />
      </div>
    )
  }
}
