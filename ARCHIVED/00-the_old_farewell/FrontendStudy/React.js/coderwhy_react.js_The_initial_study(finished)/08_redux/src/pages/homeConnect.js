import React, { PureComponent } from 'react'

import { connect } from '../utils/connect'
import { addAction, increment } from '../store/actionCreators'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={() => this.props.addNumber(5)}>+5</button>
        <button onClick={() => this.props.increment()}>+1</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  increment: function () {
    dispatch(increment())
  },
  addNumber: function (step) {
    dispatch(addAction(step))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
