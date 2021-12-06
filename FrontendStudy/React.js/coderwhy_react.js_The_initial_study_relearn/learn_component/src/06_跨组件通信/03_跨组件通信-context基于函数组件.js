import React, { Component } from 'react'

const UserContext = React.createContext({
  name1: 'defaultName1',
  name2: 'defaultName2'
})

function ComponentTestHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户名1：{value.name1}</h2>
              <h2>用户名2：{value.name2}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

function ComponentTest() {
  return (
    <div>
      <ComponentTestHeader />
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
        <UserContext.Provider value={this.state}>
          <ComponentTest />
        </UserContext.Provider>
      </div>
    )
  }
}
