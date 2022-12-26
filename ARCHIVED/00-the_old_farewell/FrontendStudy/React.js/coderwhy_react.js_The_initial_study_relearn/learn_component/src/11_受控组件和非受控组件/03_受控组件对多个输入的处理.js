import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            <input
              name="username"
              type="text"
              id="username"
              // onChange={e => this.handleUsernameChange(e)}
              onChange={e => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <label htmlFor="password">
            密码：
            <input
              name="password"
              type="text"
              id="password"
              // onChange={e => this.handlePasswordChange(e)}
              onChange={e => this.handleChange(e)}
              value={this.state.password}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state) // {username: 'tinyRipple', password: 'tinyRipple'}
  }
  // handleUsernameChange(event) {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }
  // handlePasswordChange(event) {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }
  handleChange(event) {
    this.setState({
      // 计算属性名
      [event.target.name]: event.target.value
    })
  }
}
