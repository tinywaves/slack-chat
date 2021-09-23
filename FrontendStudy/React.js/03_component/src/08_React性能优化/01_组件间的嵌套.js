// render优化
import React, { Component } from 'react'

// Header组件
function Header() {
  console.log('Header')
  return <h2>Header</h2>
}
// Main组件
function Main() {
  console.log('Main')
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}
// Footer组件
function Footer() {
  console.log('Footer')
  return <h2>Footer</h2>
}
// Banner组件
function Banner() {
  console.log('Banner')
  return <h3>Banner</h3>
}
// ProductList组件
function ProductList() {
  console.log('ProductList')
  return <h3>ProductList</h3>
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
