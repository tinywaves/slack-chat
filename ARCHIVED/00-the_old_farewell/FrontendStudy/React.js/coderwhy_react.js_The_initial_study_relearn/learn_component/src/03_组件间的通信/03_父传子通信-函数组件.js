import React, { Component } from 'react'

// 函数子组件
function ChildComponent(props) {
  const { name, id } = props
  return <h2>ChildComponent:{name + ' ' + id}</h2>
}

export default class App extends Component {
  render() {
    return <ChildComponent name="tinyRipple" id="2001" />
  }
}
