;
(function () {
    'use strict';



    new Vue({
        el: '#app',
        data: {
            list: [],
            new_goods_list: {},
            // goods_id = 0,
        },
        // mounted: function () {
        //     this.goods_list = s.get('goods_list') || [];
        //     this.goods_id = sget('goods_id') || 0;
        // },

        methods: {
            add: function () {
                var i = Object.assign({}, this.new_goods_list)

                this.list.push(i)
            }
        }
    })




























})();