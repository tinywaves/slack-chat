import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, array } = props
  return (
    <div>
      <h2>{name + ' ' + age}</h2>
      <ul>
        {array.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

// 属性验证
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  array: PropTypes.array
}
// 默认值
ChildCpn.defaultProps = {
  age: 100,
  array: ['defaultProps', 'defaultProps', 'defaultProps']
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="tinyRipple" age={20} array={['A', 'B', 'C']} />
        <ChildCpn name="ZDH" />
      </div>
    )
  }
}
