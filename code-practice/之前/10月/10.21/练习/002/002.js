;
(function () {
    'use strict';

    
    window.s = {
        get: function(key) {
            //获取值
        var  josn = localStorage.getItem(key)
         return JSON.parse(josn)
        },

        //储存值
        set:function(key,val){
            //把val当成值来存
            var josn = JSON.stringify(val)
            localStorage.setItem(key,json)
        }







    }






























})();