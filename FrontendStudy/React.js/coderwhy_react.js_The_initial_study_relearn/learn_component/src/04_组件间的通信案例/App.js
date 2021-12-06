import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      // itemList: ['流行', '新款', '精选'],
      currentIndex: 0
    }
    // 可以将不变的数据定义在state之外
    this.itemList = ['流行', '新款', '精选']
  }
  render() {
    return (
      <div>
        <TabControl itemTitlesList={this.itemList} changeShow={index => this.changeShow(index)} />
        <h2>{this.itemList[this.state.currentIndex]}</h2>
      </div>
    )
  }
  changeShow(index) {
    this.setState({
      currentIndex: index
    })
  }
}
