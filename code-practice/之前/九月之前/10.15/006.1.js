; (function () {
    'use strist'



    var task, list_id;
    init_data();


    function init_data() {
        //获取本地
        task = s.get('task', task);
        llist_id = s.get('list_id', list_id);

        //判断
        if (!task) {
            task = []
            s.set('task', task)
        }
        if (!list_id) {
            list_id = 0;
            s.set('list_id', list_id)
        }
    }


    function add (title,completed) {
        completed= completed||false;

        var new_task ={
            'id':s.get('list_id')+1,
            '名字':title,
            completed:completed,
        }
        task.push(new_task);
        inc();
        sync()
    }

    function inc() {
        var list_id = s.get ('last_id');
        s.set('list_id',last_id+1);
    }

    function sync () {
        s.set ('task',task)
    }




























})()