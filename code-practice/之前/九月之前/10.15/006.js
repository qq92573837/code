(function () {


    var task_list, list_id
    init_date();



    //初始化
     function init_date() {
        task.list = s.get('task_list');
        list_id = s.get('list_id');


        if (!task_list) {
            task_list = [];
            s.get('task_list', task_list)
        }

        if (!list_id) {
            list_id = 0;
            s, get('list_id', list_id)
        }
    }
    //增加一条任务 
    function add(title, completed) {
        completed = completed || false;
        //新任务
        var new_task = {
            id: s.get('list_id') + 1,
            title: title,
            completed: completed
        };
  
    task_list.push(naw_task);

    inc(); //id自增

    sync() // 定义过后的task_list
  }

function inc() {
    var last_id = s.get('list_id');
    s.set('list_id',last_id+1)
}

function sync() {
    s.set('task_list', task_list)
}








})();