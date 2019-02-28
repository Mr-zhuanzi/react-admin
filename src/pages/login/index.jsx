import React, {Component} from 'react';

import LoginForm from '../../components/login-form';
import {reqLogin} from  "../../api"

import logo from './logo.png';
import './index.less';


export default class Login extends Component {
  login = async(username,password)=>{
// 发送请求
    const result = await reqLogin(username,password)
    if(result.status ===0){
      // 用户登录成功
      //跳转到admin页面
      this.props.history.replace('/');
      // 保存用户信息
      // 跳转到admin页面
    }else{
      // 用户登录失败
      // 提示错误信息

      this.setState({
        errMsg: result.msg
      })
    }
  }
  render() {
    return (
      <div className="login">
       <header className="login-header">
         <img src={logo} alt="logo"/>
         <h1>React项目: 后台管理系统</h1>
       </header>
        <section className="login-form" >
          <h2>用户登录</h2>
          <LoginForm login={this.login} />
        </section>
      </div>
    )
  }
}