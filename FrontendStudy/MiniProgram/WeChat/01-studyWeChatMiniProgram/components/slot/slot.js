// components/slot/slot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({
        count: this.properties.count + 1
      })
      this.triggerEvent('sync', {
        value: this.properties.count
      })
    }
  },
  options: {
    multipleSlots: true
  }
})
