import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: 'sum',
      active: 'active'
    },
    actions: {
      updateActive: 'updateActive'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        info: 2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    }
  },
  observers: {
    'sum': function (val) {
      this.setData({
        'list[1].info': val
      })
    }
  },
  options: {
    styleIsolation: 'shared'
  }
})
