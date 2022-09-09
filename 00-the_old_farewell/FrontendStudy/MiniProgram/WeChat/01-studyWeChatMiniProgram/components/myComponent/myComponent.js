const behavior = require('../../behaviors/mybehavior')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: Number,
    min: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    number1: 0,
    number2: 0,
    // 普通数据字段
    sum: 0,
    // 纯数据字段
    _sum: 0,
    user: 'zhengdonghui'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      if (this.data.count >= this.properties.max) {
        return
      }
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 1
      })
      this._showCount()
    },
    showInfo() {
      console.log(this.data);
      console.log(this.properties);
      console.log(this.data === this.properties);
    },
    _showCount() {
      wx.showToast({
        title: '当前的count值为：' + this.data.count,
        icon: 'none'
      })
    },
    incrementNumber1() {
      this.setData({
        number1: this.data.number1 + 1
      })
    },
    incrementNumber2() {
      this.setData({
        number2: this.data.number2 + 1
      })
    }
  },
  // 监听数据的变化
  observers: {
    'number1, number2': function (number1, number2) {
      this.setData({
        sum: number1 + number2
      })
    }
  },
  options: {
    styleIsolation: 'isolated',
    pureDataPattern: /^_/
  },
  created() {
    console.log('created');
  },
  attached() {
    console.log('attached');
  },
  lifetimes: {
    created() {
      console.log('created-lifetimes');
    },
    attached() {
      console.log('attached-lifetimes');
    }
  },
  pageLifetimes: {
    show() {},
    hide() { },
    resize() {}
  },
  behaviors: [behavior]
})