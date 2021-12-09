import React, { Component } from 'react'
import { Button, Toast } from '@douyinfe/semi-ui'
import { Form } from '@douyinfe/semi-ui'
import { IconHelpCircle } from '@douyinfe/semi-icons'
import { Tooltip } from '@douyinfe/semi-ui'

function enhanceIconHelpCircle(WrapperComponent) {
  return class NewComponent extends Component {
    render() {
      return (
        <>
          <Tooltip content={'hi bytedance'}>
            <WrapperComponent />
          </Tooltip>
        </>
      )
    }
  }
}
const EnhanceIconHelpCircle = enhanceIconHelpCircle(IconHelpCircle)

export default class Demo extends Component {
  render() {
    const { Option } = Form.Select
    return (
      <>
        <Button onClick={() => Toast.warning({ content: 'welcome' })}>
          Hello Semi
        </Button>
        <Form
          layout="horizontal"
          onValueChange={(values) => console.log(values)}
          style={{ marginTop: '25px' }}
        >
          <Form.Select field="Role" label="角色" style={{ width: 176 }}>
            <Option value="admin">管理员</Option>
            <Option value="user">普通用户</Option>
            <Option value="guest">访客</Option>
          </Form.Select>
          <Form.Input field="UserName" label="用户名" style={{ width: 80 }} />
          <Form.Input
            field="Password"
            label={{ text: '密码', extra: <EnhanceIconHelpCircle /> }}
            style={{ width: 176 }}
          />
        </Form>
      </>
    )
  }
}
