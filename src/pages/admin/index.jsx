import React, {Component} from 'react';
import { Row, Col } from 'antd';
import LeftNav from '../../components/left-nav';
import './index.less';

import Category from '../category';
import Product from '../product';
import  Charts from '../charts';
import  Role from '../role';
import  Home from  '../home';
import  User from  '../user';

import {Route,Switch} from 'react-router-dom'

import Footer from '../../components/footer';
import Header from '../../components/header';
export default class Admin extends Component {
  render() {
    return (
      <Row className='admin'>
        <Col span={4}>
          <LeftNav/>
        </Col>
        <Col span={20}>
          <Header/>
            <div className='admin-main'>
              <switch>
                <Route path='/home' component={Home}/>
                <Route path='/product' component={Product}/>
                <Route path='/category' component={Category}/>
                <Route path='/role' component={Role}/>
                <Route path='/charts' component={Charts}/>
                <Route path='/user' component={User}/>
              </switch>
            </div>
        <Footer/>
        </Col>
      </Row>
    )
  }
}