import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      arrayList: [
        { name: 'A', age: 300 },
        { name: 'B', age: 200 },
        { name: 'C', age: 100 }
      ]
    }
  }
  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.arrayList !== this.state.arrayList) {
  //     return true
  //   }
  //   return false
  // }
  render() {
    return (
      <div>
        <h2>列表</h2>
        <ul>
          {this.state.arrayList.map((item, index) => {
            return (
              <div>
                <li key={item.name}>
                  姓名：{item.name}，年龄：{item.age}
                  <button onClick={() => this.ageChange(index)}>age + 10</button>
                </li>
              </div>
            )
          })}
        </ul>
        <button onClick={() => this.inputData()}>添加新数据</button>
      </div>
    )
  }
  inputData() {
    const newData = { name: 'NEW_DATA', age: 'NEW_AGE' }
    const newArrayList = [...this.state.arrayList]
    newArrayList.push(newData)
    this.setState({
      arrayList: newArrayList
    })
  }
  ageChange(index) {
    const newArrayList = [...this.state.arrayList]
    newArrayList[index].age += 10
    this.setState({
      arrayList: newArrayList
    })
  }
}
