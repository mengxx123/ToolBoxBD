// pages/idcard/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardno:"",
    cardinfo:null
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
  
  },
    //点击查询按钮
  btnClick: function () {
    var that = this;
    if (!that.data.cardno) {
      wx.showToast({
        title: '请输入身份证号码'
      })
      return false;
    }
    app.getIDcardInfo(this.data.cardno, function (data) {
      that.setData({ cardInfo: data });
    });
  },
  //读取输入数据
  inputcardno: function (e) {
    this.setData({ cardno: e.detail.value });
  }
})