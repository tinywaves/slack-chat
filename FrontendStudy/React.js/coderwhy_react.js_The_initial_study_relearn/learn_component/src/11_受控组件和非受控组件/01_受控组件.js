import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            <input
              type="text"
              id="username"
              onChange={e => this.handleChange(e)}
              // 单向数据流
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  handleSubmit(e) {
    // 取消默认行为
    e.preventDefault()
  }
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
}
