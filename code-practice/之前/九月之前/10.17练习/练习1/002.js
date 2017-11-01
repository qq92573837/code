; (function () {
    'use strict';


    var todo_list, mxd_id
    init()

    function init() {
        todo_list = s.get('todo_list');
        mxd_id = s.get('mxd_id');

        if (!todo_list) {
            todo_list = [];
            s.set('todo_list', todo_list)
        }
        if (!mxd_id) {
            mxd_id = 0;
            s.set('mxd_id', mxd_id)
        }
    }

    function add(title,complestd) {
        complestd = complestd||false
        var new_list = {

            id: s.get('mxd_id') + 1,
            title: title,
            complestd:complestd,
        }
        todo_list.push(new_list)
        auto()
        sy()
    }

   function auto () {
       mxd_id= s.get('mxd_id')
       s.set('mxd_id',mxd_id+1)
   }

   function sy(){
       s.set('todo_list',todo_list)
   }



















})();