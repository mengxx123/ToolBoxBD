// pages/calc/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idb: "back",
    idc: "clear",
    idy: "^",
    idt: "toggle",
    idadd: "＋",
    idxj: "!",
    id9: "9",
    id8: "8",
    id7: "7",
    idj: "－",
    id6: "6",
    id5: "5",
    id4: "4",
    idx: "×",
    id3: "3",
    id2: "2",
    id1: "1",
    iddiv: "÷",
    id0: "0",
    idd: ".",
    ide: "＝",
    idm: "%",
    screenData: "0",
    operaSymbo: { "＋": "+", "－": "-", "×": "*", "÷": "/", ".": "." },
    lastIsOperaSymbo: false,
    iconType: 'waiting_circle',
    iconColor: 'white',
    arr: [],
    logs: []
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
  clickBtn: function (event) {
    var id = event.target.id;
    if (id == this.data.idc) {  //清屏C
      this.setData({ "screenData": "0" });
      this.data.arr.length = 0;
    } else if (id == this.data.idt) {  //正负号+/-
      var data = this.data.screenData;
      if (data == "0") {
        return;
      }
      var firstWord = data.charAt(0);
      if (data == "－") {
        data = data.substr(1);
        this.data.arr.shift();
      } else {
        data = "－" + data;
        this.data.arr.unshift("－");
      }
      this.setData({ "screenData": data });
    }
    else if (id == this.data.ide) {
      var data = this.data.screenData;
      if (data == "0") {
        return;
      }
      var lastWord = data.charAt(data.length);
      if (isNaN(lastWord)) {
        return;
      }

      var num = "";

      var lastOperator = "";
      var arr = this.data.arr;
      var optarr = [];
      for (var i in arr) {
        if (isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt) {
          num += arr[i];
        } else {
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0]) * 1.0;
      console.log(result);
      for (var i = 1; i < optarr.length; i++) {
        if (isNaN(optarr[i])) {
          if (optarr[1] == this.data.idadd) {
            result += Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idj) {
            result -= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idx) {
            result *= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.iddiv) {
            result /= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idy) {
            var t = result;
            for (var j = 1; j < Number(optarr[i + 1]); j++)
              result *= t;
          }
          else if (optarr[1] == this.data.idm) {
            result %= Number(optarr[i + 1]);
          }
          else if (optarr[1] == this.data.idxj) {
            var j = result - 1;
            for (var k = j; k > 0; k--)
              result *= k;
          }
        }
      }

      this.data.logs.push(data + result);
      wx.setStorageSync("calclogs", this.data.logs);

      this.data.arr.length = 0;
      this.data.arr.push(result);

      this.setData({ "screenData": result + "" });
    } else {
      if (this.data.operaSymbo[id]) { //如果是符号+-*/
        if (this.data.lastIsOperaSymbo || this.data.screenData == "0") {
          return;
        }
      }

      var sd = this.data.screenData;
      var data;
      if (sd == 0) {
        data = id;
      } else {
        data = sd + id;
      }
      this.setData({ "screenData": data });
      this.data.arr.push(id);

      if (this.data.operaSymbo[id]) {
        this.setData({ "lastIsOperaSymbo": true });
      } else {
        this.setData({ "lastIsOperaSymbo": false });
      }
    }
  },
  history: function () {
    wx.navigateTo({
      url: '../history/history'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})