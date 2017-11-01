
; (function () {
    'use strict';

    var task_list, last_id;
    init_data();



    add('www')
    /*初始化本地数据，以防后期数据类型导致的错误*/
    function init_data() {
        /*获取本地数据*/
        task_list = s.get('task_list');
        last_id = s.get('last_id');

        /*如果task_list不存在*/
        if (!task_list) {
            /*task_list默认为空*/
            task_list = [];
            /*将初始值存到本地*/
            ('task_list', task_list);
        }
        /*如果last_id不存在*/
        if (!last_id) {
            /*last_id默认为0*/
            last_id = 0;
            /*将初始值存到本地*/
            ('last_id', last_id);
        }
    }

    /*增加一条任务*/
    function add(title, completed) {  //完成

        /*如果completed为true，就用它，否则为false*/
        completed = completed || false;

        /*新任务*/
        var new_task = {
            id: s.get('last_id') + 1, //每次id加一
            title: title,
            completed: completed  //如果完成
        };

        /*将新任务推入task_list*/
        task_list.push(new_task);

        /*id自增*/
        inc();

        /*将新task_list存入本地*/
        sync();
    }

    function find_index(id) {
        return task_list.findIndex(function (item) {
            if (item.id == id)
                return true;
        });
    }

    function del(id) {
        var shit_index = find_index(id);
        task_list.splice(shit_index, 1);
        sync();
    }

    /*将last_id加一*/
    function inc() {
        var last_id = s.get('last_id');
        s.set('last_id', last_id + 1);
    }

    /*将新task_list存入本地*/
    function sync() {
        s.set('task_list', task_list);
    }
})();


