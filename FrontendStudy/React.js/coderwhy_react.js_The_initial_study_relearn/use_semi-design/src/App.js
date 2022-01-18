import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Toast } from '@douyinfe/semi-ui'
import { Form } from '@douyinfe/semi-ui'
import { IconHelpCircle } from '@douyinfe/semi-icons'
import { Tooltip } from '@douyinfe/semi-ui'
import { Nav } from '@douyinfe/semi-ui'
import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons'

const MainDiv = styled.div`
  display: flex;
  .bar-title {
    margin-right: 15px;
  }
`

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
        <MainDiv>
          <Nav
            bodyStyle={{ height: 320 }}
            items={[
              { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
              { itemKey: 'union', text: '公会中心', icon: <IconStar /> },
              {
                text: '任务平台',
                icon: <IconSetting />,
                itemKey: 'job',
                items: ['任务管理', '用户任务查询']
              }
            ]}
            onSelect={data => console.log('trigger onSelect: ', data)}
            onClick={data => console.log('trigger onClick: ', data)}
            className="bar-title"
          />
          <Form
            layout="horizontal"
            onValueChange={values => console.log(values)}
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
          <Button onClick={() => Toast.warning({ content: 'welcome' })}>
            Hello Semi
          </Button>
        </MainDiv>
      </>
    )
  }
}
