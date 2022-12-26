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
              key={item}
              timeout={500}
              classNames="transition-group"
            >
              <div>
                {item}
                <button onClick={() => this.remove(index)}>-</button>
              </div>
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
  remove(index) {
    this.setState({
      arrayList: this.state.arrayList.filter((item, indey) => index !== indey)
    })
  }
}
