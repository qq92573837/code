;
(function () {
    'use strict';




    new Vue({

        el: '#app',
        data: {
            new_user: {},
            user_list: [],

        },
        methods: {

            add_user: function () {
                this.user_list.push(object.assign({}, this.new_user))
                this.new_user = {};
            }








        }





    })

















})();