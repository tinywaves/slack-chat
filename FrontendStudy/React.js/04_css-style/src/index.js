import React from 'react'
import ReactDOM from 'react-dom'

import App1 from './01_内联样式/App'
import App2 from './02_CSS文件/App'
import App3 from './03_css-modules/App'
import App4 from './04_styled-components/App'
ReactDOM.render(
  <div>
    <App1 />
    <hr />
    <App2 />
    <hr />
    <App3 />
    <hr />
    <App4 />
  </div>,
  document.getElementById('root')
)
