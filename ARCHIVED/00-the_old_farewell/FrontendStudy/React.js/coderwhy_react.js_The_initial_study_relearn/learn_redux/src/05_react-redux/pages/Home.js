import React from 'react'
import { connect } from 'react-redux'

import { incrementAction, addAction } from '../store/actionCreators'

function Home(props) {
  return (
    <>
      <h2>Home</h2>
      <h3>计数: {props.counter}</h3>
      <button onClick={e => props.increment()}>+1</button>
      <button onClick={e => props.addCounter(5)}>+5</button>
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
    increment() {
      dispatch(incrementAction())
    },
    addCounter(number) {
      dispatch(addAction(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
