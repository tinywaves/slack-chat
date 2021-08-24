Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  // 发起 GET 请求
  getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 22
      },
      success: (res) => {
        console.log(res);
      }
    })
  },
  // 发起 POST 请求
  postInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: 'POST',
      data: {
        name: 'ls',
        gender: '男'
      },
      success: (res) => {
        console.log(res);
      }
    })
  },
  syncCount(e) {
    this.setData({
      count: e.detail.value
    })
  },
  selectComponents() {
    const child = this.selectComponent('.classSlot');
    child.setData({
      count: child.properties.count + 1
    })
    child.addCount()
  },

  /**
   * 生命周期函数--监听页面加载
   * 在页面刚加载时请求数据
   */
  onLoad: function (options) {
    this.getInfo();
    this.postInfo();
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
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})