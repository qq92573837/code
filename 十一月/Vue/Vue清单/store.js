;
(function () {
    'use strict';

    window.s = {


        get: function (key) {
            var json = localStorage.getItem(key)
            return JSON.parse(json)
        },

        set: function (key, val) {
            localStorage.setItem(key,JSON.stringify(val))
        }

    }









    // watch: {
    //     deep: true,
    //     handler: function (new_val, old_val) {
    //         if (new_val) {
    //             s.set('list', new_val)
    //         } else {
    //             s.set('list', []);
    //         }

    //     }
    // }




















})();