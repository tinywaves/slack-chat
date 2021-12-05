import React from 'react'

import { connect } from '../utils/connect'
import { decrement, subAction } from '../store/actionCreators'

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.subNumber(5)}>-5</button>
      <button onClick={() => props.decrement()}>-1</button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  decrement: function () {
    dispatch(decrement())
  },
  subNumber: function (step) {
    dispatch(subAction(step))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
