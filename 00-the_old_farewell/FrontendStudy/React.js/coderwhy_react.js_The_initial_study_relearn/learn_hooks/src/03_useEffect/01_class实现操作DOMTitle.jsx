import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    document.title = this.state.counter;
  }
  componentDidUpdate() {
    document.title = this.state.counter;
  }
  render() {
    return (
      <>
        <h2>当前计数: {this.state.counter}</h2>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1
            })
          }
        >
          +1
        </button>
      </>
    );
  }
}
