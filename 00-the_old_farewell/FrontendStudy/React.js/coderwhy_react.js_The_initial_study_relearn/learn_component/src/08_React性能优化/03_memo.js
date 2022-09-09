// render优化
import React, { PureComponent, memo } from 'react'

// MemoHeader组件
const MemoHeader = memo(function Header() {
  console.log('Header')
  return <h2>Header</h2>
})
// MemoMain组件
const MemoMain = memo(function Main() {
  console.log('Main')
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
})
// MemoFooter组件
const MemoFooter = memo(function Footer() {
  console.log('Footer')
  return <h2>Footer</h2>
})
// Banner组件
class Banner extends PureComponent {
  render() {
    console.log('Banner')
    return <h3>Banner</h3>
  }
}
// ProductList组件
class ProductList extends PureComponent {
  render() {
    console.log('ProductList')
    return <h3>ProductList</h3>
  }
}

export default class App extends PureComponent {
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
        <MemoHeader />
        <MemoMain />
        <MemoFooter />
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
