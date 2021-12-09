import React, { PureComponent, Fragment } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      arrayList: ['A', 'B', 'C']
    }
  }
  render() {
    return (
      // <Fragment>
      //   <h2>当前计数：{this.state.counter}</h2>
      //   <button onClick={() => this.increment()}>+1</button>
      // </Fragment>
      // Fragment的短语法写法
      <>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <div>
          {this.state.arrayList.map(item => {
            return (
              // 使用Fragment的短语法不能添加key等属性
              <Fragment key={item}>
                <div>{item}</div>
              </Fragment>
            )
          })}
        </div>
      </>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends PureComponent {
  render() {
    return <Counter />
  }
}
