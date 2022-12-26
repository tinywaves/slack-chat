import React, { Component } from 'react'

// Header
function Header() {
  return <h2>HeaderComponent</h2>
}
// Main
function Main() {
  return <h2>MainComponent</h2>
}
// Footer
function Footer() {
  return <h2>FooterComponent</h2>
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
