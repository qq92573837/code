; (function () {
    'use strict';




    window.s = {

        get: function (key) {
            var josn = localStorage.getItem(key)
            return JSON.parse(key)
        },
        set: function (key, val) {
            val = JSON.stringify(val)
            return localStorage.setItem(key, val)

        }



    }






























})();