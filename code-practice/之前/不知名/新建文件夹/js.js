;(function () {
  'use strict';

  var result = user_list;

  function search_by_playing(playing) {
    /*清空过滤结果，因为我们不知道user_list里是否有满足条件的用户*/
    result = [];

    /*迭代所有用户*/
    for (var i = 0; i < user_list.length; i++) {
      var user = user_list[i];

      /*如果当前用户在玩指定的游戏*/
      if (user.playing.indexOf(playing) != -1) {
        /*将此用户推到结果中*/
        result.push(user);
      }
    }
    // return result;
  }

  function render() {
    /*找到页面中显示列表的div*/
    var result_div = document.querySelector('#result');
    /*清空上一次的搜索内容*/
    result_div.innerHTML = '';

    /*迭代搜索结果*/
    for (var i = 0; i < result.length; i++) {
      var user = result[i];
      /*创建一个卡片*/
      var user_el = document.createElement('div');

      /*在卡片内部插入HTML*/
      user_el.innerHTML = `
        <h4>${user.name}</h4>
      `;

      /*将卡片插入显示列表*/
      result_div.appendChild(user_el);
    }
  }

  function boot() {
    /*初始渲染*/
    render();

    /*找到LOL过滤按钮*/
    var lol_btn = document.getElementById('lol');
    /*为LOL按钮绑定事件*/
    lol_btn.addEventListener('click', function () {
      /*当LOL按钮被点击时，开始通过'lol'过滤用户列表*/
      search_by_playing('lol');
      render();
    })
  }

  /*程序的入口*/
  boot();
})();