// pages/phone/index.js
//获得应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    phoneInfo:null,

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
  btnClick:function(){
    var that=this;
    if (!that.data.phone) {
      wx.showToast({
        title: '请输入手机号码'
      })
      return false;
    }
    app.getphoneinfo(this.data.phone, function (data) { 
      that.setData({ phoneInfo:data});
    });
  },
  //读取输入数据
  inputphone:function(e){
    this.setData({ phone: e.detail.value});
  }
})