'use strict';
/* eslint no-console:0*/
require('normalize.css/normalize.css');
import 'antd/dist/antd.css';

import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';

/*topMenu start*/
function TopMenu() {
  return(
    <div className="topbar">
        <Row className="topbar-row">
          <Col className="topbar-col" span={6}><Link className="topbar-link" to="/story" activeStyle={{ color: 'white' }}>首页</Link></Col>
          <Col className="topbar-col" span={6}><Link className="topbar-link" to="/story/type" activeStyle={{ color: 'white' }}>分类</Link></Col>
          <Col className="topbar-col" span={6}><Link className="topbar-link" to="/story/rank" activeStyle={{ color: 'white' }}>排行</Link></Col>
          <Col className="topbar-col" span={6}><Link className="topbar-link" to={{pathname: '/story/shelf/username', query: {username: 'xutengfeng'}}} activeStyle={{ color: 'white' }}>书架</Link></Col>
        </Row>
    </div>
  )
}
/*topMenu end*/

export default TopMenu;
