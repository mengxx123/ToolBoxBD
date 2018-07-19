
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    Name: "ToolBoxBD",
    Team: "RSNDM",
    Slogan: "Burning your dreams",
    Version: "1.0",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "term": "设备信息",
          "url": "☰",

        },
        {
          "id": 2,
          "term": "关于程序",
          "url": "☰",
        },
      ]
    };
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          brand: res.brand,
          model: res.model,
          version: res.version,
          language: res.language,
          platform: res.platform,
          system: res.system,
        })
      }
    })
    that.setData({
      DataInfo: data.datas
    })
  },

  //切换隐藏和显示 
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
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