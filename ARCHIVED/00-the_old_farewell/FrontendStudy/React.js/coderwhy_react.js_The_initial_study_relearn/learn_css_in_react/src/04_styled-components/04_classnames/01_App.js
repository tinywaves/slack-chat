import React, { PureComponent } from 'react'
import classnames from 'classnames'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isBar: true,
      isFoo: false,
      errorClass: 'errorClass'
    }
  }
  render() {
    return (
      <>
        {/* 不使用classnames库 */}
        <div className="foo bar"></div>
        <div className={'foo bar'}></div>
        <div className={'foo' + (this.state.isBar ? ' bar' : '')}></div>
        <div className={['foo', this.state.isBar ? ' bar' : ''].join(' ')}></div>
        {/* 使用classnames库 */}
        <div className={classnames('foo', 'bar')}></div>
        <div className={classnames({ bar: this.state.isBar })}></div>
        <div className={classnames('bar', { foo: this.state.isFoo })}></div>
        <div className={classnames('bar', this.state.errorClass)}></div>
        <div className={classnames('bar', null)}></div>
        <div className={classnames('bar', undefined)}></div>
        <div className={classnames('bar', 0)}></div>
        <div className={classnames('bar', 10)}></div>
        <div className={classnames(['foo', 'bar'])}></div>
        <div className={classnames(['foo', { bar: this.state.isBar }])}></div>
      </>
    )
  }
}
