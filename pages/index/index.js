//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    parentItem: [
      {
        itemTiele: "网络工具",
        imgUrls: [
          "../../img/a38.png",
          "../../img/a19.png",
          "../../img/a1.png",
        ],
        texts: [
          "身份证查询",
          "手机归属地查询",
          "IP地址",
        ]
      },
      {
        itemTiele: "日常生活",
        imgUrls: [
          "../../img/a73.png",
          "../../img/a183.png",
          "../../img/a80.png",
          "../../img/bmi.png",
        ],
        texts: [
          "天气预报",
          "计算器",
          "倒计时",
          "BMI计算"
        ]
      },
      {
        itemTiele: "开心娱乐",
        imgUrls: [
          "../../img/a63.png",
          "../../img/qq.png",
          "../../img/a58.png",
          "../../img/a65.png",
        ],
        texts: [
          "每日一句",
          "笑话大全",
          "搞笑趣图",
          "老黄历",
        ]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goTools: function (event) {
    var to = event.target.dataset.sel
    var to_str = this.isToUrl[to];
    console.log(to);
    wx.navigateTo({
      url: '../' + to_str + '/' + "index"
    })
  },
  isToUrl: {
    "0-0": "idcard",
    "0-1": "phone",
    "0-2": "ip",
    "1-0": "weather",
    "1-1": "calc",
    "1-2": "time",
    "1-3": "bmi",
    "2-0": "daily",
    "2-1": "joke",
    "2-2": "jokep", 
    "2-3": "almanac",
  }
})
