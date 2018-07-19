// pages/clock/clock.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hour: 0,
    minute: 0,
    second: 0,
    interval: "",
    tag: -1,//判断start,stop,end状态
    hiddenmodalput: true,
    target: "",//判断id
    pre: "",
    done: -1,
    is: true,
    msg: '请更新输入或取消'
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
  /**
   * 启动时钟
   */
  startClock: function () {
    var tag = this.data.tag;
    if (tag != -1) {
      return
    }
    //判断
    var interval_hour = this.data.hour;
    var nhour = 0;
    var interval_minute = this.data.minute;
    var nminute = 0;
    var interval_second = this.data.second;
    var that = this;
    if (interval_second >= 60) {
      var tmp = interval_second;
      interval_second = interval_second % 60;
      nminute = (tmp - interval_second) / 60;
      interval_minute = interval_minute + nminute;
    }
    if (interval_minute >= 60) {
      var tmp = interval_minute;
      interval_minute = interval_minute % 60;
      nhour = (tmp - interval_minute) / 60;
      interval_hour = interval_hour + nhour;
    }
    if (interval_hour >= 24) {
      interval_hour = interval_hour % 24;
    }
    //计时
    var interval = setInterval(function () {
      if (interval_hour == 0 && interval_minute == 0 && interval_second == 0) {
        that.setData({
          hour: interval_hour,
          minute: interval_minute,
          second: interval_second
        })
        return;
      }
      if (interval_second > 0) {
        interval_second--;
      } else if (interval_second == 0 && interval_minute > 0) {
        interval_second = 59;
        interval_minute--;
      } else if (interval_second == 0 && interval_minute == 0) {
        if (interval_hour > 0) {
          interval_hour--;
          interval_minute = 59;
          interval_second = 59;
        }
      }
      that.setData({
        hour: interval_hour,
        minute: interval_minute,
        second: interval_second
      })
    }.bind(this), 1000);
    this.setData({
      interval: interval
    })
    this.setData({
      tag: 0
    })
  },
  /**
   * 暂停时钟
   */
  stopClock: function () {
    var tag = this.data.tag;
    if (tag >= 0) {
      var interval = this.data.interval;
      clearInterval(interval);
      tag = -1;
      this.setData({
        tag: tag,
      })
    }
  },
  /**
   *结束时钟
   */
  endClock: function () {
    var interval = this.data.interval;
    clearInterval(interval);
    this.setData({
      hour: 0,
      minute: 0,
      second: 0,
      interval: "",
      tag: -1
    });
  },
  /**
   * 设置小时
   */
  setTime: function (e) {
    var target = this.data.target;
    var num = e.detail.value;
    num = Number(num);
    var regNum = new RegExp('[0-9]', 'g');
    // console.log(regNum.exec(num));
    if (regNum.exec(num) == null) {
      this.setData({
        done: 0
      })
      return;
    }
    if (target == "hour") {
      var pre = this.data.hour + 'h';
      this.setData({
        pre: pre,
        hour: num,
        done: 0
      })
    }
    if (target == "minute") {
      var pre = this.data.minute + 'm';
      this.setData({
        pre: pre,
        minute: num,
        done: 0
      })
    }
    if (target == "second") {
      var pre = this.data.second + 's';
      this.setData({
        pre: pre,
        second: num,
        done: 0
      })
    }
    console.log('input.pre== ' + pre);
  },
  //点击弹出hiddenmodalput弹出框  
  modalinput: function (e) {
    var target = e.target.id;
    this.stopClock();
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      target: target
    })
  },
  //取消按钮  
  cancel: function () {
    var done = this.data.done;
    // console.log("cancel.done=="+done);
    if (done < 0) {
      this.setData({
        hiddenmodalput: true,
        is: true
      });
      var fix = this.data.pre.substr(-1);
      var num = 0;
      if (fix == 'h') {
        num = this.data.hour;
      }
      if (fix == 'm') {
        num = this.data.minute;
      }
      if (fix == 's') {
        num = this.data.second;
      }
      var pre = num + fix;
      this.setData({
        pre: pre
      })
      return;
    }
    var pre = this.data.pre;
    if (pre.substr(-1) == 'h') {
      var num = parseInt(pre);
      this.setData({
        hour: num,
        done: -1,
      })
    }
    if (pre.substr(-1) == 'm') {
      var num = parseInt(pre);
      this.setData({
        minute: num,
        done: -1,
      })
    }
    if (pre.substr(-1) == 's') {
      var num = parseInt(pre);
      this.setData({
        second: num,
        done: -1,
      })
    }
    // console.log("pre== "+pre)
    this.setData({
      hiddenmodalput: true,
      is: true
    });
    // this.startClock();
  },
  //确认  
  confirm: function () {
    var done = this.data.done;
    if (done < 0) {
      this.setData({
        is: false,
        hiddenmodalput: false,
      });
      return;
    }
    // console.log('confirm.pre == '+this.data.pre);
    var fix = this.data.pre.substr(-1);
    var num = 0;
    if (fix == 'h') {
      num = this.data.hour;
    }
    if (fix == 'm') {
      num = this.data.minute;
    }
    if (fix == 's') {
      num = this.data.second;
    }
    var pre = num + fix;
    this.setData({
      pre: pre,
      hiddenmodalput: true,
      done: -1,
      is: true
    })
    // this.startClock();
  },
  // inputBlur:function(){
  //   var done=this.data.done;
  //   if(done==-1){
  //     console.log('should clear...')
  //     this.setData({
  //       inputValue:""
  //     })
  //   }
  // }
})