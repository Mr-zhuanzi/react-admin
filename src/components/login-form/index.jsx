import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';
import {reqLogin}from '../../api/index'
// 放在import下面不然报错
   const Item = Form.Item;
  class LocginForm extends Component {
    static propTypes = {
      login: PropTypes.func.isRequired
    }
    checkPassword =(rule,value,callback) =>{
      if(!value){
        callback('必须输入密码');
      }else if(value.length < 4){
        callback('密码长度必须超过4位');
      }else if(value.length>11){
        callback('密码长度不能超过11位');
      }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
        callback('密码只能包含大小写英文、数字或者下划线')
      }else{
        // 通过
        callback();
      }
  }

  handleSubmit = e =>{
      e.preventDefault();
      // 检验当前表单是否通过
    const {resetFields,validateFields} = this.props.form;
      validateFields(async (error,values)=>{
      if(!error){
// 通过
        console.log('收集的表单数据：', values);
        const {username, password} = values;
        // 调用父组件login的方法，由父组件发送登录请求
        this.props.login(username,password)

      }else{
// 重置密码
        resetFields(['password']);

        // 收集错误信息
        const errMsg = Object.values(error).reduce((prev, curr) => prev + curr.errors[0].message + ' ', '')
        // 提示错误
        message.error('errMsg');
      }
      })
  }

  render() {
    const { getFieldDecorator,getFieldValue } = this.props.form;
    // console.log(getFieldValue('username'));
    return (
      <Form className="login-form-container" onSubmit={this.handleSubmit} >
        <Item>
          {
            //getFieldDecorator(輸入框標示名稱)
            // getFieldDecorator()返回值是一個函數，是一個高jian函數
            getFieldDecorator(
              'username',
              {
                rules:
                  [
                  { required: true, message: '请输入您的名字' },
                  {min:4,message:'用户名必须大于或者等于4位'},
                  {max:10,message:'用户名最大10位'},
                  {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是大小写英文,数字,下划线'}
                  ],
                 }
            )(<Input prefix={<Icon type="user" />} placeholder="请输入您的账号" />)
          }
        </Item>
        <Item>
          {
            getFieldDecorator(
              'password',
              {
                rules:
                  [
                    {validator:this.checkPassword},
                  ],
              }
            )( <Input type="password"  prefix={<Icon type="safety" />} placeholder="请输入您的密码" />)
          }
        </Item>
        <Item>
          <Button type='primary' htmlType='submit' className="login-form-button">登录</Button>
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