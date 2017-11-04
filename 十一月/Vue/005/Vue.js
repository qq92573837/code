; (function () {
    'use strict';



    new Vue({
        el: '#app',
        data: {
            list: [],
            goods_list: {},
        },
        methods: {
            find_index: function (id) {
                return this.list.findIndex(function (goods) {
                    return goods.id = id;
                })
            },
            add_update: function () {

                var goods = Object.assign({}, this.goods_list)
                this.list.push(goods)
                console.log(this.list)
            },


            remove: function (id) {
                var goods = this.find_index(id)
                this.list.splice(goods, 1)
            }

        }
    })





























})();