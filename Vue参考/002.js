; (function () {
    'use strict';
    window.S = {};
    S.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    S.set = function (key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    };
})();