import React, {Component} from 'react';
import  './index.less';


import {Menu, Icon} from 'antd';

import {NavLink, withRouter} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
class LeftNav extends Component {
  render() {
    // 获取当前的路径
    const {pathname} = this.props.location;
    return (
      <div className='left-nav'>
        <header>
        <NavLink to='/home' className='left-nav-header'>
          <img src={logo} alt="logo"/>
          <h2>硅谷后台</h2>
        </NavLink>
        </header>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
        >

          <Item key='/home'>
            <NavLink to='/home'>
              <Icon type="home" />
              <span>首页</span>
            </NavLink>

          </Item>
          <SubMenu title={
            <span>
              <Icon type="shopping-cart" />
              商品
            </span>
          }>
            <Item  key='/category'>
              <NavLink to='/category'>
              <Icon type="database" theme="filled" />
              <span>品类管理</span>
              </NavLink>
            </Item  >
            <Item  key='/product'>
              <NavLink to='/product'>
              <Icon type="tool" theme="filled" />
              <span>商品管理</span>
            </NavLink>
            </Item>
        </SubMenu>
          <Item  key='/user'>
            <NavLink to='/user'>
            <Icon type="user" />
            <span>用户管理</span>
            </NavLink>
          </Item>
          <Item  key='/role'>
            <NavLink to='/role'>
            <Icon type="safety-certificate" />
            <span>权限管理</span>
          </NavLink>
          </Item>
          <SubMenu title={<span><Icon type="area-chart" />图形图表</span>}>
          <Item  key='/charts'>
            <NavLink to='/charts'>
            <Icon type="bar-chart" />
            <span>柱形图</span>
            </NavLink>
          </Item>
          <Item  key='7'>
            <NavLink to='/charts'>
            <Icon type="line-chart" />
            <span>折线图</span>
          </NavLink>
          </Item>
            <Item  key='8'>
              <NavLink to='/charts'>
              <Icon type="line-chart" />
              <span>饼图</span>
              </NavLink>
            </Item>
        </SubMenu>

      </Menu>

      </div>
    )
  }
}

// withRouter 是一个高阶组件
export default withRouter(LeftNav)