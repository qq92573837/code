;
(function () {
    'use strict';


    window.s = {

        get: function (key) {
            var json = localStorage.getItem(key)
            return JSON.parse(key)
        },
        set: function (key, val) {
            var json = JSON.stringify(val)
            localStorage.setItem(key, json)
        }
    }





























})();