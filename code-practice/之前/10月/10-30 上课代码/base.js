$(function () {
  'use strict';

  var user_list = [];
  var form = $('#search-form');
  var input = form.find('#search-input');
  var el_result = $('.search-result');
  var el_loading = $('#loading');
  var el_empty = $('#empty');

  init();

  function init() {
    form.on('submit', function (e) {
      e.preventDefault();
      send(input.val());
      render();
    });
  }
preventdefaulf
  function send(keyword) {
    el_loading.show();
    $.get('http://api.github.com/search/users?q=' + keyword)
      .done(function (data) {
        user_list = data.items;

        if (data.items.length === 0)
          el_empty.show();
        else
          el_empty.hide();

        render();
      })
      .fail(function () {
        alert('接口出错啦');
      })
      .always(function () {
        el_loading.hide();
      })
  }

  function render() {
    el_result.html('');
    user_list.forEach(function (user) {
      var el_user = $('<div>');
      el_user.html(`
      <div class="result-item row">
        <div class="avatar col sm">
          <img src="${user.avatar_url}">
        </div>
        <div class="username col lg">${user.login}</div>
      </div>
      `);
      el_result.append(el_user);
    });
  }
});
