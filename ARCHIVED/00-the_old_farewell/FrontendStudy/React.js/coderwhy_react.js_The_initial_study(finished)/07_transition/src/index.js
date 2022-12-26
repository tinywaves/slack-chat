import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import CSSTransition from './1_CSSTransition/App'
import SwitchTransition from './2_SwitchTransition/App'
import TransitionGroup from './3_TransitionGroup/App'

ReactDOM.render(
  <div>
    <CSSTransition />
    <SwitchTransition />
    <TransitionGroup />
  </div>,
  document.getElementById('root')
)
