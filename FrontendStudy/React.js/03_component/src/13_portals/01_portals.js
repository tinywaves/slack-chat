import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.getElementById('modal'))
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal>
          <h2>h2</h2>
          <span>span</span>
        </Modal>
      </div>
    )
  }
}
