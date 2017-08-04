'use strict';
/* eslint no-console:0*/
require('normalize.css/normalize.css');
require('styles/Story.scss');
import 'antd/dist/antd.css';

import React from 'react';
import TopMenu from './TopMenu';


class AppStory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <TopMenu />
          { this.props.children }
        </div>
    )
  }
}
export default AppStory;
