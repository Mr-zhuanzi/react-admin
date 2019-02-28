import React, {Component} from 'react';
import  './index.less';


import {Menu, Icon} from 'antd';

import {NavLink, withRouter} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
export default class LeftNav extends Component {
  render() {
    return (
      <div className='left-nav'>
        <NavLink to='/home' className='left-nav-header'>
          <img src={logo} alt="logo"/>
          <h2>硅谷后台</h2>
        </NavLink>
        <Menu  theme="dark" mode="inline">

          <Item>
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
            <Item>
              <NavLink to='/category'>
              <Icon type="database" theme="filled" />
              <span>品类管理</span>
              </NavLink>
            </Item>
            <Item>
              <NavLink to='/product'>
              <Icon type="tool" theme="filled" />
              <span>商品管理</span>
            </NavLink>
            </Item>
        </SubMenu>
          <Item>
            <NavLink to='/user'>
            <Icon type="user" />
            <span>用户管理</span>
            </NavLink>
          </Item>
          <Item>
            <NavLink to='/role'>
            <Icon type="safety-certificate" />
            <span>权限管理</span>
          </NavLink>
          </Item>
          <SubMenu title={<span><Icon type="area-chart" />图形图表</span>}>
          <Item>
            <NavLink to='/charts'>
            <Icon type="bar-chart" />
            <span>柱形图</span>
            </NavLink>
          </Item>
          <Item>
            <NavLink to='/charts'>
            <Icon type="line-chart" />
            <span>折线图</span>
          </NavLink>
          </Item>
            <Item>
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