import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tabControl.css'

export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    const { titles } = this.props
    return (
      <div className="tab">
        {titles.map((item, index) => {
          return (
            <div
              className={'tab-item ' + (this.state.currentIndex === index && 'active')}
              onClick={() => this.changeCurrentIndex(index)}
              key={item}
            >
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  changeCurrentIndex(index) {
    this.setState({
      currentIndex: index
    })
    const { itemClick } = this.props
    itemClick(index)
  }
}
TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
