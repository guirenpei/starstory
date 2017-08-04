'use strict';
/* eslint no-console:0*/
require('normalize.css/normalize.css');
import 'antd/dist/antd.css';

import React from 'react';
import { Link } from 'react-router';

class Prime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, error: null, data: null };
    this.fetchData = this.fetchData.bind(this);
  }
  componentWillMount() {
    console.log('willmount');
  }
  componentDidMount() {
    this.fetchData();
    console.log('did-mount', this.state);
  }
  fetchData() {
    fetch('http://127.0.0.1:3500/react/story')
      .then((res) => res.json())
      .then((text) => {
      console.log('log-text', text);
      if (text.success) {
        console.log('保存数据！')
        this.setState({ loading: false, data: text.data });
      } else {
        this.setState({ loading: false, error: '数据加载出错了～～' });
      }
    });
  }
  renderLoadingView() {
    return (
      <div>
        <h1>正在加载书籍数据……</h1>
      </div>
    );
  }
  render() {
    return (
      this.state.loading ?
        this.renderLoadingView()
       :
        <div>
          <ul>
            {this.state.data.map((story) => {
              return <li key={story._id}>{story.storyname}</li>
            })}
          </ul>
          { this.props.children }
        </div>
    )
  }
}
class Popular extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>For Popular</h1>
      </div>
    )
  }
}

class TypeList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Type List</h1>
      </div>
    )
  }
}

class ReadTip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="read-tip">
        <div className="recent">
          <Link className="more-in" to="/type" >更多</Link>
          <Link className="recent-chapter" to="/story/summary" activeStyle={{ color: 'white' }}>
            <em>wait</em>
            <span>继续阅读：书名&nbsp;&nbsp;最近阅读到的章节</span>
          </Link>
        </div>
      </div>
    )
  }
}
class FreeButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-button">
        <Link className="nav-button-title">
          <em>11</em>
          <i>{this.props.title}</i>
        </Link>
      </div>
    )
  }
}
class Advertisement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let size = [];
    for (var i = 0; i < 5; i++) {
      size.push(<i key={i} className="indicator"></i>);
    }
    console.log(size);
    return (
      <div className="slider">
        <div className="slider-ad">
          {/* 广告上方部分 */}
          <div className="slider-ad-wipe">
            {/* 广告滑动页面 */}
          </div>
          <div className="slider-indicator">
            {/* 小圆点指示器 */}
            {size}
          </div>
        </div>
        <div className="free-girl">
          {/* 广告下方部分 俩按钮*/}
          <FreeButton title={this.props.button.free}/>
          <FreeButton title={this.props.button.girl}/>
        </div>
      </div>
    )
  }
}

function Home() {
  return (
    <div className="container">
      <div className="main">
        <ReadTip />
        <Advertisement button={{free: '免费专区', girl: '女频精选'}} />
      </div>
    </div>
  )
}
export default Home;
