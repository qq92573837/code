; (function () {
    'use strict';
    window.S = {};
    S.set = function (key, val) {
        localStorage.setItem(key, JSON.stringify(val));
        return true;
    };
    S.get = function (key) {
        var val = localStorage.getItem(key);
        val = JSON.parse(val);
        return val;
    };
})();