'use strict';
/* eslint no-console:0*/
require('normalize.css/normalize.css');

import React from 'react';
import {findDOMNode} from 'react-dom';
// 获取图片相关数据
let imageDatas = {
  'images':[
  {
    'fileName': '1.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '2.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '3.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '4.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '5.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '6.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '7.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '8.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '9.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '10.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '11.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '12.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '13.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '14.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '15.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '16.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  }
]};
// 利用函数，将图片信息转化成图片URL路径信息
imageDatas = (function genImageUrl(imageDatasArr) {
  for (let i = 0, j = imageDatasArr.length;i < j;i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require(`../images/${singleImageData.fileName}`);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas.images);

/*
 * 获取区间内的一个随机值
 */
function getRangeRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
}

/*
 * 获取 0~30° 之间的一个任意正负值
 */
function get30DegRandom() {
  return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
}
class ImgFigure extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  /*
   * imgFigure的点击处理函数
   */
  handleClick(e) {
    this.props.inverse();
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    // 如果 props属性中指定了这张图片的位置，则使用
    let styleObj = this.props.arrange.pos ? this.props.arrange.pos : {};
    // 如果旋转角度有值且不为0，添加旋转角度
    if (this.props.arrange.rotate) {
      (['Moz', 'Webkit', 'ms', 'O' , '']).forEach((value) => {
        styleObj[value + 'Transform'] = 'rotateX(' + this.props.arrange.rotate + 'deg)';
        styleObj[value + 'Transform'] = 'rotateY(180deg)';
      });
    }
    let imgFigureClassName = 'img-figure';
    imgFigureClassName += this.props.arrange.isInverse ? ' inverse' : '';
    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
              {this.props.data.desc}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

class ImageBox extends React.Component {
  constructor(props) {
    super(props);
    this.Constant = {
      centerPos: {left: 0, right: 0},
      // 水平方向的取值范围
      hPosRange: {leftSecX: [0, 0], rightSecX: [0, 0], y: [0, 0]},
      // 垂直方向的取值范围
      vPosRange: {x: [0, 0], topY: [0, 0]}
    };
    this.state = {
      imgsArrangeArr: [
        // {pos: {left: 0, top: 0 }}
      ]
    }
  }
  // 组件加载以后为其计算每一张图片的位置范围
  componentDidMount() {
    // 首先找到舞台stage的大小
    const stageDom = this.stage;
    const stageW = stageDom.scrollWidth;
    const stageH = stageDom.scrollHeight;
    const halfStageW = Math.ceil(stageW / 2);
    const halfStageH = Math.ceil(stageH / 2);

    // 拿到一个imageFigure的大小
    const imgFigure = findDOMNode(this.refs.imgFigure0);
    const imgW = imgFigure.scrollWidth;
    const imgH = imgFigure.scrollHeight;
    const halfImgW = Math.ceil(imgW / 2);
    const halfImgH  = Math.ceil(imgH / 2);

    // 计算中心图片的位置点
    this.Constant.centerPos = {left: halfStageW - halfImgW, top: halfStageH - halfImgH};
    // 加蒜左侧／右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;
    // 计算上侧区域图片排布位置的取值范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3 ;
    this.Constant.vPosRange.x[0] = halfStageW- imgW;
    this.Constant.vPosRange.x[1] = halfStageW;
    console.log('Constant', this.Constant);
    this.rearrange(0);
  }
  /*
   * 重新布局所有图片
   *  @params centerIndex 指定剧中排布哪个图片
   */
  rearrange(centerIndex) {
    const imgsArrangeArr = this.state.imgsArrangeArr;
    const Constant = this.Constant;
    const centerPos = Constant.centerPos;
    const hPosRange = Constant.hPosRange;
    const vPosRange = Constant.vPosRange;
    const hPosRangeLeftSecX = hPosRange.leftSecX;
    const hPosRangeRightSecX = hPosRange.rightSecX;
    const hPosRangeY = hPosRange.y;
    const vPosRangeTopY = vPosRange.topY;
    const vPosRangeX = vPosRange.x;

    let imgsArrangeTopArr = [];
    const topImgNum = Math.ceil(Math.random() * 2);    // 取一个或者不取
    let topImgSpliceIndex = 0;

    const imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
    // 首先居中 centerIndex 的图片, 居中的 centerIndex 的图片不需要旋转
    imgsArrangeCenterArr[0] = {pos: centerPos, rotate: 0, isInverse: true};
    // 取出要布局上侧的图片的状态信息
    topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
    imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);
    // 布局位于上侧的图片
    imgsArrangeTopArr.forEach((value, index) => {
      imgsArrangeTopArr[index] = {
        pos: {
          top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
          left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
        },
        rotate: get30DegRandom(),
        isInverse: false
      };
    });
    // 布局左右两侧的图片
    for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      let hPosRangeLORX = null;
      // 前半部分布局左边， 右半部分布局右边
      if (i < k) {
          hPosRangeLORX = hPosRangeLeftSecX;
      } else {
          hPosRangeLORX = hPosRangeRightSecX;
      }
      imgsArrangeArr[i] = {
        pos: {
            top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
            left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
        },
        rotate: get30DegRandom(),
        isInverse: false
      };
    }
    if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
        imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
    }
    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
    this.setState({
        imgsArrangeArr: imgsArrangeArr
    });
  }
  inverse(index) {
    return function() {
      const imgsArrangeArr = this.state.imgsArrangeArr;
      imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
      console.log('arr', imgsArrangeArr);
      this.setState({
        imgsArrangeArr: imgsArrangeArr
      });
    }.bind(this);
  }
  render() {
    let controllerUnits = [], imgFigures = [];
    imageDatas.forEach((value, index) => {
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {pos: {left: 0, top: 0}, rotate: 0};
      }
      imgFigures.push(
        <ImgFigure
          ref={'imgFigure' + index}
          key={'imgFigure' + index}
          data={value}
          arrange={this.state.imgsArrangeArr[index]}
          inverse={this.inverse(index)}
        />
      );
    });
    return (
      <section className="stage" ref={(a) => this.stage = a}>
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

ImageBox.defaultProps = {

};


export default ImageBox;
