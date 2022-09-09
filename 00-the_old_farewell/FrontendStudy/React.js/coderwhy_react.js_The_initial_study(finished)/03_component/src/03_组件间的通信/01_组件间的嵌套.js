import React, { Component } from 'react'

// Header组件
function Header() {
  return <h2>Header</h2>
}
// Main组件
function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}
// Footer组件
function Footer() {
  return <h2>Footer</h2>
}
// Banner组件
function Banner() {
  return <h3>Banner</h3>
}
// ProductList组件
function ProductList() {
  return <h3>ProductList</h3>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
