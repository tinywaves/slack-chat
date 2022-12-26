Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello WeChat MiniProgram',
    imageSrc: 'http://zhengdh.top/image/WeChat.jpg',
    randomNumber: Math.random().toFixed(2),
    count: 0,
    type: 0,
    array: ['zdh', 'tiny', 'ripple', 'ZDH'],
    userList: [
      {id: 1, name: 'tinyRipple'},
      {id: 2, name: 'zhengdonghui'},
      {id: 3, name: 'zdh'}
    ]
  },
  btnTap(e) {
    // event 对象
    console.log(e);
  },
  increment() {
    // 数据赋值
    this.setData({
      count: this.data.count + 1
    })
  },
  decrement() {
    this.setData({
      count: this.data.count - 1
    })
  },
  passParameter(event) {
    // 获取函数参数
    console.log(event.target.dataset);
    console.log(event.target.dataset.info);
    this.setData({
      count: this.data.count + event.target.dataset.info
    });
  },
  inputHandler(e) {
    // 获取文本框最新的内容
    console.log(e.detail.value);
  },
  dataSynchronism(e) {
    this.setData({
      message: this.data.message = e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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