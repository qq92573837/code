(function () {

    var task_list, last_id
    init()

    //初始化
    function init() {
        task_list = s.get('task_list');
        last_id = s.get('last_id');
        if (!task_list) {
            task_list = [];
            s.set('task_list', task_list)
        }
        if (!last_id) {
            last_id = 0;
            s.set('last_id', last_id);
        }
    }

    //增加
    function add(title, matter, time, completed) {
        completed = completed || false;
        var new_task = {
            id: s.get('last_id') + 1,
            matter: matter,
            time: time,
        }
        task_list.push(new_task)
        inc()
        se()
    }

    //删除    
    function find_index(id) {
        return task_list.findIndex(function (item) {
            if (item.id == id)
                return true;
        });
    }

    function del(id) {
        var shit_index = find_index(id);
        if (shit_index === -1)
            return;

        task_list.splice(shit_index, 1);
        se();
    }


    //改变
    function update(id, matter) {
        /*通过id找索引*/
        var task_index = find_index(id);
        /*如果不存在就直接返回*/
        if (task_index === -1) return;

        /*获取对应的对象*/
        var task = task_list[task_index];
        /*更新标题*/
        task.matter = matter;

        /*存到本地*/
        se();
    }



    function inc() {
        last_id = s.get('last_id')
        s.set('last_id', last_id + 1);

    }



    function se() {
        s.set('task_list', task_list)
    }

    // update(1,'NIDAYE')
    // add(1,'你大爷','222222222222222','333333333333')


    //查找

    function seek(id, ) {
        /*通过id找索引*/
        var task_index = find_index(id);
        /*如果不存在就直接返回*/
        if (task_index === -1) return;

        /*获取对应的对象*/
        var task = task_list[task_index];
        console.log(task)
    }

    seek(2)





})()