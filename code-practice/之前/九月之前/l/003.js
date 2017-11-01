; (function () {
    'use strict';

    var todo, todo_id
    initialize()


        function initialize() {
            todo = s.get('todo');
            todo_id = s.get('todo_id');
            if (!todo) {
                todo = []
                s.set('todo', todo)
            }
            if (!todo_id) {
                todo_id = 0;
                s.set('todo_id', todo_id)
            }
        }


    function add(name, describe, price, ) {
        var task = {
            id: s.get('todo_id') + 1,
            name: name,
            describe: describe,
            price: price,
        }
        todo.push(task)

        identity()
        preserve()
    }


    function identity() {
        todo_id = s.get('todo_id', todo_id)
        s.set('todo_id', todo_id + 1)
    }

    function preserve() {
        s.set('todo', todo)
    }




add('酸奶','$$$122','就是不给你')


















})();