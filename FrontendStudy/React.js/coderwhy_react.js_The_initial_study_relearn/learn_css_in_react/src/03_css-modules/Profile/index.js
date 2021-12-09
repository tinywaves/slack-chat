import React, { PureComponent } from 'react'

import profileStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={profileStyle.title}>Profile</h2>
      </div>
    )
  }
}
