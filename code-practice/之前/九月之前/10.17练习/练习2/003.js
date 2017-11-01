; (function () {
    'use strict';

    var deta_list, deta_id
    initialize()


    function initialize(){
        deta_list = s.get('deta_list')
        deta_id = s.get('deta_id')
        if (!deta_list) {
            deta_list = [];
            s.set('deta_list', deta_list)
            console.log(deta_list)
        }
        if (!deta_id) {
            deta_id = 0;
            s.set('deta_id', deta_list)
        }
    }


    function add(title,content,time,completed)  {
        completed=completed ||false;
        var  new_list = {
            id:s.get('deta_id')+1,
            content:content,
            time:time,
            completed:completed
        }
        deta_list.push(new_list)
        identity()
        conserve ()
    }

    function  identity() {
        deta_id= s.get('deta_id')
        s.set('deta_id',deta_id+1)
    }
    function conserve () {
        s.set('deta_list',deta_list)
    }

    



// add('1','whh','.children 子元素列表','20170603')


















})();