import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      arrayList: 'c'
    }
  }
  render() {
    return (
      <div>
        <form>
          <select
            name="arrayList"
            onChange={e => this.handleChange(e)}
            value={this.state.arrayList}
          >
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
        </form>
      </div>
    )
  }
  handleChange(event) {
    this.setState({
      arrayList: event.target.value
    })
  }
}
