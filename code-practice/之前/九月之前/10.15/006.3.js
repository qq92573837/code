; (function () {
    'use strist'

    var task, list_id;

    init_data()
    

    function init_data() {

        var task =  s.get('task')
        var list_id = s.get('list_id');

        if (!task) {
            task = []
                ('task', task)
        }
        if (!list_id) {
            list_id = 0;
            ('list_id', list_id)
        }
    }


    function add(title, complistd) {
        complistd = complistd || false;

        var new_task = {
            id: s.get('list_id') + 1,
            title: title,
            complistd: complistd
        }
        task.push(new_task);
        a()
        s()
    }

    function a() {
        list_id = s.get('list_id', list_id)
        s.set('list_id', list_id + 1)
    }


    function s() {
        s.get('task', task)
    }

    function p(id) {
        for (var i = 0; i < task.length; i++) {
          
            if(list_id==id) {
                list_id.splice(i,1)
            }

        }
    }
 



})();
























