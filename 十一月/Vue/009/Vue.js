
; (function () {
    'use strict';


    new Vue({
        el: '#app',
        data: {
            list: [],
            goods_list: {},
        },
        methods: {
            add: function () {
                var i = Object.assign({}, this.goods_list)
                this.list.push(i)
            }
        }
    })






























})();