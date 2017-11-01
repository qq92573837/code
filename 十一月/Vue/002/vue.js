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
                if (!this.new_user.name || !this.new_user.age)
                    return
                this.user_list.push(Object.assign({}, this.new_user));
                this.new_user = {};

            },

            remove: function (index) {
                this.user_list.splice(index, 1)
            },
            update: function (index) {
                this.new_user = this.user_list[index]

            }
        }
    });

































})();