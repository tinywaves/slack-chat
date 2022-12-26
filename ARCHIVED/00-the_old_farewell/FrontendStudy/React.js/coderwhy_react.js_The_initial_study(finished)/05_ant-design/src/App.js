import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { Button, Space } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'

export default class App extends PureComponent {
  state = {
    loadings: []
  }
  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings]
      newLoadings[index] = true
      return {
        loadings: newLoadings
      }
    })
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings]
        newLoadings[index] = false
        return {
          loadings: newLoadings
        }
      })
    }, 6000)
  }
  render() {
    const { loadings } = this.state
    return (
      <div>
        <>
          <Space style={{ width: '100%' }}>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading />
          </Space>
          <Space style={{ width: '100%' }}>
            <Button
              type="primary"
              loading={loadings[0]}
              onClick={() => this.enterLoading(0)}
            >
              Click me!
            </Button>
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              loading={loadings[1]}
              onClick={() => this.enterLoading(1)}
            >
              Click me!
            </Button>
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              loading={loadings[2]}
              onClick={() => this.enterLoading(2)}
            />
          </Space>
        </>
        {/* classnames库动态添加class */}
        <h2 className={classNames('foo', 'bar')}>App</h2>
        <h2 className={classNames('foo', null)}>App</h2>
        <h2 className={classNames('foo', undefined)}>App</h2>
        <h2 className={classNames({ foo: true })}>App</h2>
        <h2 className={classNames('bar', { foo: true })}>App</h2>
        <h2 className={classNames(['foo', 'bar'])}>App</h2>
        <h2 className={classNames(['foo', { bar: false }])}>App</h2>
      </div>
    )
  }
}
