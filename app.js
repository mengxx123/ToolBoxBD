//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //返回手机号查询信息
  getphoneinfo:function(phone,cb){
    const requestTask = wx.request({
      url: 'https://cx.shouji.360.cn/phonearea.php?number='+phone, 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
        
      }
    })
  },
  //得到IP信息
  getIpInfo: function(ip,cb){
    const requestTask = wx.request({
      url: 'http://apis.juhe.cn/ip/ip2addr?dtype=json&key=f5ed45f8f3b2c7e6922b6dcf10f3d0d2&ip=' + ip,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        cb(res.data);

      }
    })
  },
  //得到身份证信息
  getIDcardInfo: function (cardno, cb) {
    const requestTask = wx.request({
      url: 'http://apis.juhe.cn/idcard/index?dtype=json&key=9e9d57471c7d119824101b2507a3ac97&cardno=' + cardno,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        cb(res.data);

      }
    })
  },
  //获得每日一句信息
  getDailyInfo:function(time,cb){
    const requestTask = wx.request({
      url: 'http://open.iciba.com/dsapi/?date='+time,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        cb(res.data);

      }
    })
  },
  //获得老黄历信息
  getAlmanacInfo:function(date,cb){
    const requestTask = wx.request({
      url: 'http://v.juhe.cn/laohuangli/d?key=6fe8a6b8e467bc382563291affb260df&date='+date,
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        cb(res.data);
      }
    })
  },
  //获得快递公司代码
  getcomresult:function(cb){
    const requestTask = wx.request({
      url: 'http://v.juhe.cn/exp/com?key=b22d75497ecd0f18cd341ccc6fcb6f880',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        cb(res.data);
      }
    })
  },
   globalData: {
    userInfo: null,
    appkey: '27cbc56fca0ea27c8495e0032724bbde',
     pagesize:10,
  },

})