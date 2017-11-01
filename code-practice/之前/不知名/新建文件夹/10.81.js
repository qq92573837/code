var a = [

    {

        头像: 'img.png',
        网名: '河南省旅游局官方微博',
        发布时间: '28分钟前',
        登录端: '微博 weibo.com',
    },

    {
        text: '泰国国际天灯节！太美太梦幻[憧憬]​​​​',
        url: 'http://weibo.com/',
    },


    {
        收藏次数: [12,],
        分享次数: [90,],
        评论次数: [30,],
        点赞次数: [20,],
    },
]
 var  c=[]
for(var i=0;i<a.length;i++){
    var b=a[i]
    if(b.url){
        c.push(b.text)
    }
    console.log(b.url)
}
console.log(c)








