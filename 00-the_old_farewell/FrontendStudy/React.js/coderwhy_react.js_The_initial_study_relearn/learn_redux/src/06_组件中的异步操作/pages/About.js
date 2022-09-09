import React from 'react'
import { connect } from 'react-redux'

function About(props) {
  return (
    <>
      <h2>About</h2>
      <h1>Banners</h1>
      <ul>
        {props.banners.map(item => {
          return <li key={item.acm}>{item.title}</li>
        })}
      </ul>
      <h1>Recommends</h1>
      <ul>
        {props.recommends.map(item => {
          return <li key={item.acm}>{item.title}</li>
        })}
      </ul>
    </>
  )
}

const mapStateToProps = state => {
  return {
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
