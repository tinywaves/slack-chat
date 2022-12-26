Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionsPara: {},
    products: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false
  },
  getProducts(cb) {
    this.setData({
      isLoading: true
    });
    wx.showLoading({
      title: '数据加载中...',
    });
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.optionsPara.id}/shops`,
      method: 'GET',
      data: { 
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        this.setData({
          products: [...this.data.products, ...res.data],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        wx.hideLoading();
        this.setData({
          isLoading: false
        });
        cb && cb();
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      optionsPara: options
    });
    this.getProducts();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.optionsPara.title
    })
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
    this.setData({
      page: 1,
      products: [],
      total: 0
    });
    this.getProducts(() => {
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.page * this.data.pageSize >= this.data.total) {
      return wx.showToast({
        title: '数据加载完毕',
        icon: ''
      })
    }
    if (this.data.isLoading) {
      return;
    }
    this.setData({
      page: this.data.page + 1
    });
    this.getProducts();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})