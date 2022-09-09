import React, { PureComponent, forwardRef, createRef } from 'react'

const FunctionComponent = forwardRef(function (props, ref) {
  return <h2 ref={ref}>functionComponent</h2>
})

export default class App extends PureComponent {
  constructor() {
    super()
    this.functionComponentRef = createRef()
  }
  render() {
    return (
      <div>
        <FunctionComponent ref={this.functionComponentRef} />
        <button onClick={e => this.printRef()}>printRef</button>
      </div>
    )
  }
  printRef() {
    console.log(this.functionComponentRef.current) // <h2>functionComponent</h2>
  }
}
