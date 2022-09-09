Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeColorR() {
      this.setData({
        'rgb.r': this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5
      })
    },
    changeColorG() {
      this.setData({
        'rgb.g': this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5
      })
    },
    changeColorB() {
      this.setData({
        'rgb.b': this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5
      })
    },
    _randomColor() {
      this.setData({
        rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    }
  },
  // 监听对象属性的变化
  observers: {
    'rgb.r, rgb.g, rgb.b': function (r, g, b) {
      this.setData({
        fullColor: `${r}, ${g}, ${b}`
      })
    }
  },
  options: {
    pureDataPattern: /^_/
  },
  pageLifetimes: {
    show() {
      this._randomColor();
    }
  }
})
