import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      arrayList: ['A', 'B', 'C']
    }
  }
  render() {
    return (
      <TransitionGroup>
        {this.state.arrayList.map((item, index) => {
          return (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="item"
            >
              <div>{item}</div>
            </CSSTransition>
          )
        })}
        <button onClick={() => this.addArrayList()}>+arrayList</button>
      </TransitionGroup>
    )
  }
  addArrayList() {
    const newArrayList = [...this.state.arrayList]
    newArrayList.push('DEFAULT')
    this.setState({
      arrayList: newArrayList
    })
  }
}
