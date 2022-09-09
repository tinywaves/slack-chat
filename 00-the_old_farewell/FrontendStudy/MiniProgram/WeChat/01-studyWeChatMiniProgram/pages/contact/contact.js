// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 随机颜色列表
    colorList: [],
    // 对上拉触底进行节流处理
    isLoading: false
  },
  // 定义获取随机颜色的方法
  getColors() {
    this.setData({
      isLoading: true
    })
    // 添加 loading 提示效果
    wx.showLoading({
      title: '数据加载中...'
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success: ({data: res}) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      complete: () => {
        // 在加载完毕后隐藏 loading 提示效果
        wx.hideLoading();
        this.setData({
          isLoading: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 定义获取随机颜色的方法
   */
  onLoad: function (options) {
    this.getColors();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   * 上拉触底时获取随机颜色
   */
  onReachBottom: function () {
    if (this.data.isLoading) {
      return;
    }
    this.getColors();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})