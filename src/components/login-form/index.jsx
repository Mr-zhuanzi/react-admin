import React, {Component} from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';
// 放在import下面不然报错
 const Item = Form.Item;
  class LocginForm extends Component {
  render() {
    return (
      <Form className="login-form-container" >
        <Item>
          <Input   prefix={<Icon type="user" />} placeholder="请输入您的账号" />
        </Item>
        <Item>
          <Input   prefix={<Icon type="safety" />} placeholder="请输入您的密码" />
        </Item>
        <Item>
          <Button className="login-form-button">登录</Button>
        </Item>
      </Form>
    )
  }
}
//
const WrappedLoginForm = Form.create()(LocginForm);
export default WrappedLoginForm;