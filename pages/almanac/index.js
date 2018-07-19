// pages/almanac/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    ndate:"",
    almanacInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var datetime = year + "-" + month + "-" + day;
    this.setData({ time: datetime });
    app.getAlmanacInfo(that.data.time, function (data) {
      that.setData({ almanacInfo: data });
    });
  },
  //点击日期
  bindDateChange: function (e) {
    var that =this;
    console.log(e.detail.value);
    this.setData({
      time: e.detail.value
    });
    app.getAlmanacInfo(that.data.time, function (data) {
      that.setData({ almanacInfo: data });
    });
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

})