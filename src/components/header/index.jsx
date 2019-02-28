import React, {Component} from 'react';
import  './index.less'
import {Row, Col, Modal, message} from 'antd';
export default class header extends Component {
  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <span>欢迎, xxxxxx</span>
          <a href="javascript:void(0);" >退出</a>
        </Row>
        <Row className='header-bottom'>
          <Col span={6} className='header-bottom-left'>啊啊啊</Col>
          <Col span={18} className='header-bottom-right'>
          {/*<span>{sysTime}</span>*/}
          {/*<img src={dayPictureUrl} alt="天气"/>*/}
          {/*<span>{weather}</span>*/}
          啊啊啊啊啊啊啊啊啊啊啊
          </Col>
        </Row>
      </div>
    )
  }
}