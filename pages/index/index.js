//index.js
//获取应用实例
// const app = getApp()
import { request } from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList:[],
    // 导航数组
    categoryList:[],
    floor:[]
  },
  // 页面开始加载 就会触发
  onLoad: function (options) {
    this.getSwiperList();
    this.getCategoryList();
    this.getFloor();
  },
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },
  getSwiperList() {
    request({url:'http://wxmall.test/api/swiper'})
    .then(result=>{
      console.log(result.data)
        this.setData({
          swiperList:result.data
        })
    })
  },
  getCategoryList() {
    request({url:'http://wxmall.test/api/cate_item'})
    .then(result=>{
      console.log(result.data)
        this.setData({
          categoryList:result.data
        })
    })
  },
  getFloor() {
    request({url:'http://wxmall.test/api/floor'})
    .then(result=>{
      console.log(result.data)
        this.setData({
          floor:result.data
        })
    })
  },
})
