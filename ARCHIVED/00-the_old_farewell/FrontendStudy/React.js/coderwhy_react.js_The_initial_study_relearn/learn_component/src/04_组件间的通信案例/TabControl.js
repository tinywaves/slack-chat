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
    const { itemTitlesList } = this.props
    return (
      <div className="tab">
        {
          itemTitlesList.map((item, index) => {
            return (
              <div
                className={'tab-item ' + (this.state.currentIndex === index && 'active')}
                onClick={e => {
                  this.changeIndex(index)
                }}
                key={index}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    )
  }
  changeIndex(index) {
    const { changeShow } = this.props
    this.setState({
      currentIndex: index
    })
    changeShow(index)
  }
}

TabControl.propTypes = {
  itemTitlesList: PropTypes.array
}
