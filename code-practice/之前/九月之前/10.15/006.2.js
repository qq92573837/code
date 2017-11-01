; (function () {
    'use strist'

    var task, list_id;
    init_data();




    //初始化
    function init_data() {
        task = s.get('task')
        list_id = s.get('list_id')

        if (!task) {
            task = [],
                ('task', task)
        };
        if (!list_id) {
            list_id = 0;
            ('list_id', list_id)
        }
    }


    //新任务
    function add(title, complistd) {
        complistd = complistd || false

        var new_task = {
            'id': s.get('list_id') + 1,
            '名字': title,
            complistd: complistd
        }
        task.push(new_task)
        inc()
        sync()
    }


    //自增 id+1
    function inc() {
        list_id = s.get('list_id', list_id),
            s.set('list_id', list_id + 1);
    }
    //存
    function sync() {
        s.set('task', task)
    }


    //删除
    function omit(id) {
        var task = s.get('task');
        console.log(task)
        for (var i = 0; i < task.length; i++) {

            if (task[i].id == id) {
                task.splice(i, 1)
            }
        }
        s.set('task', task)
    }


    //改变
    function update(id, title) {
        var task_index = find_index(id);
        if (task_index === -1) return
        var tisk = task_index(title);
        tisk.title = title;
        sync()
    }




    //添加
    add('你好'),
    
    //删除
    omit(),

    //改变
    update(),




})()
























