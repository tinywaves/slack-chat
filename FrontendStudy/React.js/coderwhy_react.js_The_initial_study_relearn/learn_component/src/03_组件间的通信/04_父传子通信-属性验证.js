import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildComponent(props) {
  const { name, id, arrayList } = props
  return (
    <div>
      <h2>ChildComponent:{name + ' ' + id}</h2>
      <ul>
        {arrayList.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

// 属性验证
ChildComponent.propTypes = {
  // 表示name属性父组件是必须传递的
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  arrayList: PropTypes.array
}
// 设置默认值
ChildComponent.defaultProps = {
  id: 100000,
  arrayList: ['defaultProps', 'defaultProps']
}
// 在类组件中还有另一种写法,如下:
// class Temp extends Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number,
//     arrayList: PropTypes.array
//   }
//   static defaultProps = {
//     id: 100000,
//     arrayList: ['defaultProps', 'defaultProps']
//   }
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildComponent name="tinyRipple" id={2001} arrayList={['tinyRipple', 'ZDH']} />
        <ChildComponent name="zhengdonghui" />
      </div>
    )
  }
}
