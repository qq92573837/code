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
        text: '太美太梦幻[憧憬]​​​​',
        url: 'http://.com/',
    },

]

function 分类( u)  {
    for(var i=0; i<a.length;i++){
        var b = a[i]
        if(b.url=== u){
            console.log(b.url)
        }
    }
}

分类( 'http://weibo.com/')