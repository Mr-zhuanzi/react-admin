import React, {Component} from 'react';
import  './index.less'
export default class header extends Component {
  render() {
    return (
      <div className='header'>
        <span>欢迎，xxx</span>
        <a href='javascript:void (0)'>退出</a>
      </div>
    )
  }
}