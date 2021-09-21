import React from 'react'
import ReactDOM from 'react-dom'

import AppClass from './01_组件的定义方式/AppClass'
import AppFunction from './01_组件的定义方式/AppFunction'
import RenderReturn from './01_组件的定义方式/render函数返回值'
import App02 from './02_组件的生命周期/App'
// import App03 from './03_组件间的通信/01_组件间的嵌套'
import App03 from './03_组件间的通信/02_类组件-父传子通信'

ReactDOM.render(
  <div>
    <AppClass />
    <AppFunction />
    <RenderReturn />
    <hr />
    <App02 />
    <hr />
    <App03 />
  </div>,
  document.getElementById('root')
)
