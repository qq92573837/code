; (function () {
  'use strict';

  var task_list, last_id;
  init_data();
  function init_data() {
    task_list = s.get('task_list');
    last_id = s.get('last_id');

    if (!task_list) {
      task_list = []
      s.set('task_list', task_list)
    }
    if (!last_id) {
      last_id = 0;
      s.set('last_id', last_id)
    }

  }

})();