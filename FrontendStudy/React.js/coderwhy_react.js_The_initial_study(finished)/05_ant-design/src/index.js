import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'
import 'antd/dist/antd.less'

import App1 from './App'
import App from '@/AntdCase/App'

ReactDOM.render(
  <div>
    <App1 />
    <hr />
    <App />
  </div>,
  document.getElementById('root')
)
