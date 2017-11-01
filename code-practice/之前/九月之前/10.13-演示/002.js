;(function () {
    'use strict';
  
    var result = user_list;
  
    /*搜索*/
    function search(keyword) {
      result = [];
      for (var i = 0; i < user_list.length; i++) {
        var user = user_list[i];
        if (user.playing.indexOf(keyword) != -1) {
          /*把搜索结果装到result中*/
          result.push(user);
        }
      }
    }
  
    /*渲染*/
    function render() {
      var card_list = document.querySelector('#card-list');
      card_list.innerHTML = '';
  
      /*把result渲染到页面中*/
      for (var i = 0; i < result.length; i++) {
        var user = result[i];
        /*生成当前用户的卡片*/
        var card = document.createElement('div');
        card.innerHTML = `
        <h3>${user.name}</h3>
        `;
  
        card_list.appendChild(card);
      }
    }
  
    search('lol')
    render();
  })();