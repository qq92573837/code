;
(function () {
    'use strict';




    new Vue({
        el: '#app',
        data: {
            keyword: '',
            result: {},
        },
        methods: {
            search: function () {
                var me = this;
                $.ajax({
                    url: 'https://api.douban.com/v2/book/search?q=' +  me.keyword + "apikey=0b2bdeda43b568892c8ecb20399b",
                    dataType: 'jsonp',
                }).then(function (r) {
                    me.result = r;
                })
            }
        },
    });









})();