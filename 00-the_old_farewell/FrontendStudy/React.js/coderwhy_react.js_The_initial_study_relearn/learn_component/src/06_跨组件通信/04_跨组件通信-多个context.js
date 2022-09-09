import React, { Component } from 'react'

const UserContext = React.createContext({
  name1: 'defaultName1',
  name2: 'defaultName2'
})
const ColorContext = React.createContext({
  color: 'red'
})

function ComponentTestHeader() {
  return (
    <UserContext.Consumer>
      {
        user => {
          return (
            <ColorContext.Consumer>
              {
                textColor => {
                  return (
                    <div>
                      <h2 style={{color: textColor.color}}>用户名1：{user.name1}</h2>
                      <h2>用户名2：{user.name2}</h2>
                    </div>
                  )
                }
              }
            </ColorContext.Consumer>
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
          <ColorContext.Provider value={{color: 'blue'}}>
            <ComponentTest />
          </ColorContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
