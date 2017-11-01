/* storage.js */
;(function () {
  'use strict';

  window.s = {
    /*获取一坨数据*/
    get: function (key) {
      /*现在得到的是json字符串*/
      var json = localStorage.getItem(key)
      /*解析为原本的数据*/
      return JSON.parse(json);
    },
    /*存入一坨数据*/
    set: function (key, val) {
      /*将数据变成json字符串*/
      val = JSON.stringify(val);
      /*存入json字符串*/
      return localStorage.setItem(key, val)
    },
  }
})();

/* main.js */
;(function () {
  'use strict';

  var task_list, last_id;
  init_data();

  /*初始化本地数据*/
  function init_data() {
    /*获取本地数据*/
    task_list = s.get('task_list');
    last_id = s.get('last_id');

    /*如果task_list不存在*/
    if (!task_list) {
      /*task_list默认为空*/
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
})();