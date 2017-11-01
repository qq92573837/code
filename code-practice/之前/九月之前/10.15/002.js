; (function () {
    'use strict';
    window.s = {
        get: function (key) {
                                    //获取key本地数据
            // var json = localStorage.getItem(key);
            // return JSON.parse(json)
            return JSON.parse(localStorage.getItem(key));

        },
        
        set: function (key, val) {
            val = JSON.stringify(val);
                                //将val存入key
            return localStorage.setItem(key, val)
        }
    }
   

























})()