import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render() {
    return <h2>HOME</h2>
  }
}

const Profile = forwardRef(function (props, ref) {
  return <h2 ref={ref}>PROFILE</h2>
})

export default class App extends PureComponent {
  constructor() {
    super()
    this.titleRef = createRef()
    this.homeRef = createRef()
    this.profileRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>REF</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} />
        <button onClick={() => this.printRef()}>printRefer</button>
      </div>
    )
  }
  printRef() {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.profileRef.current)
  }
}
