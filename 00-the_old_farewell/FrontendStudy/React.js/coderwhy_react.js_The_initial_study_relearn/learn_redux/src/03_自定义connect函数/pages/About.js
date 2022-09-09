import React from 'react'

import { connect } from '../utils/connect'
import { decrementAction, subAction } from '../store/actionCreators'

function About(props) {
  return (
    <>
      <h2>About</h2>
      <h3>计数: {props.counter}</h3>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subCounter(5)}>-5</button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement() {
      dispatch(decrementAction())
    },
    subCounter(number) {
      dispatch(subAction(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
