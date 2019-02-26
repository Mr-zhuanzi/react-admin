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
    const { getFieldDecorator,getFieldValue } = this.props.form;
    // console.log(getFieldValue('username'));

    return (
      <Form className="login-form-container" >
        <Item>
          {
            //getFieldDecorator(輸入框標示名稱)
            // getFieldDecorator()返回值是一個函數，是一個高jian函數
            getFieldDecorator(
              'username',
              {
                rules: [
                  { required: true, message: '请输入您的名字' },
                  {min:4,message:'用户名必须大于4位'},
                  {max:10,message:'用户名最大10位'},
                  {pattern:/^a-zA-Z0-9_$/,message:'用户名必须是大小写英文，数字，下划线'}

                  ],

              }
            )(<Input   prefix={<Icon type="user" />} placeholder="请输入您的账号" />)
          }
        </Item>
        <Item>
          {
            getFieldDecorator(
              'password',

              {
                rules: [
                  { required: true, message: '请输入您的密码' },
                  {min:8,message:'密码必须大于8位'},
                  {max:20,message:'密码最大20位'},
                  {pattern:/^a-zA-Z0-9_$/,message:'密码必须是大小写英文，数字，下划线'}
                  ],

              }
            )( <Input   prefix={<Icon type="safety" />} placeholder="请输入您的密码" />)
          }

        </Item>
        <Item>
          <Button className="login-form-button">登录</Button>
        </Item>
      </Form>
    )
  }
}
    /*
     包裹了LoginForm组件，生成一个新组件Form(LoginForm)
     作用：产生新组件，由新组件向LoginForm组件传递form属性
     语法：
     Form.create()返回值是一个函数X，Form.create这个函数叫做高阶函数（高阶函数：返回值是函数或者参数是函数）
     Form.create()(LoginForm)返回值是一个组件，函数X叫做高阶组件（高阶组件本质上是一个函数，接受的参数是组件，返回值是一个新组件）
     */
const WrappedLoginForm = Form.create()(LocginForm);
export default WrappedLoginForm;