import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.refDom = createRef()
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            <input type="text" id="username" ref={this.refDom} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.refDom.current.value)
  }
}
