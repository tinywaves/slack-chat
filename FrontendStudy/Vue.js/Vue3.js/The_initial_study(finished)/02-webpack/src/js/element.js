// import 'css-loader!../css/style.css'
import '../css/style.css'
import '../css/testLess.less'
import '../css/img.css'
import '../font/iconfont.css'

import zznhImg from '../img/zznh.png'

const divEle = document.createElement('div')
divEle.className = 'ZDH'
divEle.innerHTML = 'tinyRipple'
document.body.appendChild(divEle)

// 设置背景图片
const bgDivEle = document.createElement('div')
bgDivEle.className = 'img-bg'
document.body.appendChild(bgDivEle)

// 设置 img 元素的 src 属性
const imgEle = document.createElement('img')
// imgEle.src = '../img/zznh.png'
imgEle.src = zznhImg
document.body.appendChild(imgEle)

// 加载字体文件
const iEle = document.createElement('i')
iEle.className = 'iconfont icon-ashbin'
document.body.appendChild(iEle)