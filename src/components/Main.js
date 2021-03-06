require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 获取图片相关数据
let imageDatas = require('../data/imageDatas.json');
// 利用函数，将图片信息转化成图片URL路径信息
imageDatas = (function genImageUrl(imageDatasArr) {
  for (let i = 0, j = imageDatasArr.length;i < j;i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData = require(`../images/${singleImageData.fileName}`);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
