;
(function () {
  'use strict';

  var task_list, last_id;
  init_data();



  /*初始化本地数据，以防后期数据类型导致的错误*/
  function init_data() {

    task_list = s.get('task_list');
    last_id = s.get('last_id');

    if (!task_list) {

      task_list = [];
      /*将初始值存到本地*/
      s.set('task_list', task_list);
    }
    /*如果last_id不存在*/
    if (!last_id) {
      /*last_id默认为0*/
      last_id = 0;
      /*将初始值存到本地*/
      s.set('last_id', last_id);
    }
  }

  /*增加一条任务*/
  function add(title, completed) {

    /*如果completed为true，就用它，否则为false*/
    completed = completed ? completed : false;

    /*新任务*/
    var new_task = {
      id: s.get('last_id') + 1,
      title: title,
      completed: completed
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
    if (shit_index === -1)
      return;

    task_list.splice(shit_index, 1);
    sync();
  }

  function update(id, title) {
    /*通过id找索引*/
    var task_index = find_index(id);
    /*如果不存在就直接返回*/
    if (task_index === -1) return;

    /*获取对应的对象*/
    var task = task_list[task_index];

    /*更新标题*/
    task.title = title;

    /*存到本地*/
    sync();
  }

  /*将last_id加一*/
  function inc() {
    last_id = s.get('last_id');
    s.set('last_id', last_id + 1);
  }

  /*将新task_list存入本地*/
  function sync() {
    s.set('task_list', task_list);
  }




  add('你大爷');


})();