;
(function () {
    'use strict';




    new Vue({

        el: '#main',
        data: {

            list: [],
            current: {},


        },

        mounted: function () {
            this.list = s.get('list') || this.list;

        },


        methods: {




            merge: function () {
                var is_update, id,
                    is_update = this.current.id;
                if (is_update) {
                    var index = this.list.findIndex(function (index) {
                        return index.id = is_update;
                    });

                    Vue.set(this.list, index, Object.assign({}, this.current))
                } else {

                    var title = this.current.title;
                    if (!title && title !== 0) return

                    var todo = Object.assign({}, this.current)
                    todo.id = this.next_id();
                    this.list.push(todo);
                }
                s.set('list', this.list)
                this.reset_surrent();
            },

            remove: function (id) {
                
                this.list.splice(id, 1)
                s.set('list', this.list)
            },


            next_id: function (id) {
                return this.list.length + 1;
            },

            set_current: function (todo) {
                this.current = Object.assign({}, todo)
            },

            reset_surrent: function () {
                this.set_current({});
            },

            find_index: function (id) {
                return this.list.findIndex(function (item) {
                    return

                })
            },

            watch: {
                deep: true,
                handler: function (new_val, old_val) {
                    if (new_val) {
                        s.set('list', new_val)
                    } else {
                        s.set('list', []);
                    }

                }
            }


        }
    })




























})();