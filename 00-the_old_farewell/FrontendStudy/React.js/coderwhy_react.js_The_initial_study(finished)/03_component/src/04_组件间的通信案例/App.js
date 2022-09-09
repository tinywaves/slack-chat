import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.titlesArray = ['流行', '新款', '精选']
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    return (
      <div>
        <TabControl
          titles={this.titlesArray}
          itemClick={index => this.itemClick(index)}
        />
        <h2>{this.titlesArray[this.state.currentIndex]}</h2>
      </div>
    )
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
  }
}
