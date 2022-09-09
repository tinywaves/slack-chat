import React, { Component } from 'react'

// 类子组件
class ChildComponent extends Component {
  // props接收父组件传递的属性
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { name, id } = this.props
    return <h2>ChildComponent:{name + ' ' + id}</h2>
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'tinyRipple',
      id: 2001
    }
  }
  render() {
    const { name, id } = this.state
    return <ChildComponent name={name} id={id} />
  }
}
