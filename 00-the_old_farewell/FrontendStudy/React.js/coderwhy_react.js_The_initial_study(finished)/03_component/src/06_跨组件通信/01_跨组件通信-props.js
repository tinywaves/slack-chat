import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户名1：{props.name1}</h2>
      <h2>用户名2：{props.name2}</h2>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader name1={props.name1} name2={props.name2} /> */}
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
      </ul>
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
    // const { name1, name2 } = this.state
    return (
      <div>
        {/* <Profile name1={name1} name2={name2} /> */}
        <Profile {...this.state} />
      </div>
    )
  }
}
