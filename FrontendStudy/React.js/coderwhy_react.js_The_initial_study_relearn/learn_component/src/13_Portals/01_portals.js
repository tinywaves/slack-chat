import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal'))
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <Modal>
        <h2>h2</h2>
        <span>span</span>
      </Modal>
    )
  }
}
