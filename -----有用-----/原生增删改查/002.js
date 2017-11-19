;
(function () {
    'use strict';

    window.s = {};

    s.set = function (key, val, ) {
        var josn = JSON.stringify(val)
        localStorage.setItem(key, josn)
    }


    s.get = function (key) {
        var josn = localStorage.getItem(key);
        return JSON.parse(josn)
    }

})();