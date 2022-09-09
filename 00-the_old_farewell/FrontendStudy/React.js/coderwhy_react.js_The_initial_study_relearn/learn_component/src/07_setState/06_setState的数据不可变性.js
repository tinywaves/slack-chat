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
  // 如果采用了SCU优化,并且在修改state时不使用setState而是使用this.state.arrayList.push()的方式,这样arrayList永远是指向原来那个数组, 此时在SCU优化下即使数组内容更新也不会调用render方法重新渲染页面;使用setState会生成一个新的state对象和arrayList数组,此时只要数组内容更新,shouldComponentUpdate返回true,调用render方法根据新的state值渲染页面
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
