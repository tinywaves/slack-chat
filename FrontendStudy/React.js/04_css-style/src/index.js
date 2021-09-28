import React from 'react'
import ReactDOM from 'react-dom'

import App1 from './01_内联样式/App'
import App2 from './02_CSS文件/App'
ReactDOM.render(
  <div>
    <App1 />
    <hr />
    <App2 />
  </div>,
  document.getElementById('root')
)
