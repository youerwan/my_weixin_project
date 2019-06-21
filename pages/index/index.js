Page({

    /**
     * 页面的初始数据
     */
    data: {
        sliderList: [],

    },

    /**
     * 本质就是事件
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("A2:首页，监听页面加载");
        wx.request({
            url: 'https://locally.uieee.com/slides',
            //   data: '',
            header: {},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                this.setData({
                    sliderList: res.data,
                });
            },
            fail: function(res) {},
            complete: function(res) {},
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log("A2:首页，监听页面初次渲染完成")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log("A2:首页，监听页面显示")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log("A2:首页，监听页面隐藏")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log("A2:首页，监听页面卸载")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})