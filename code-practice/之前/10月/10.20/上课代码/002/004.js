;
(function () {
  'use strict'

  var el_article_list = document.querySelector('#article-list');
  var el_article_form = document.querySelector('#article-form');

  init();

  function init() {
    /*一开始就渲染一次*/
    render();
    /*监听表单提交事件*/
    bind_submit();
  }

  /*监听添加*/
  function bind_submit() {
    /* 当表单提交时 */
    el_article_form.addEventListener('submit', function (e) {
      /*禁止默认操作*/
      e.preventDefault();
      /*把表单中的数据变成对象*/
      var article = get_form_value(el_article_form);

      /*如果其中有id说明是想更新*/
      if (article.id) {
        b.update(parseInt(article.id), article);
      }
      /*如果没有id说明是想新增*/
      else {
        b.add(article);
      }
      /*更新或添加后重新渲染*/
      render();
    });
  }

  function get_form_value(el) {
    /*初始化新文章*/
    var data = {};
    /*获取表单下所有的儿子*/
    var input_list = el.children;

    /*迭代表单的儿子*/
    for (var i = 0; i < input_list.length; i++) {
      var input = input_list[i];
      /*如果儿子是<input>或者<textarea>*/
      if (input.nodeName == 'INPUT' || input.nodeName == 'TEXTAREA') {
        /*这个儿子的name的值为新文章的一个键*/
        var key = input.getAttribute('name');
        /*获取输入框中的值*/
        var val = input.value;

        /*过河拆桥，清空元素中的值*/
        input.value = '';

        /*为新文章添加一条属性*/
        data[key] = val;
      }
    }

    return data;
  }

  function render() {
    /*先清空文章列表*/
    el_article_list.innerHTML = '';
    /*获取所有文章数据*/
    var list = b.read();
    /*遍历每一条文章*/
    list.forEach(function (article) {
      var del_btn;
      var update_btn;
      /*生成一条文章卡片*/
      var el_article = document.createElement('div');
      /*给文章卡片添加一个类，方便css选择*/
      el_article.classList.add('article-item');
      /*在文章卡片中写入各种内容*/
      el_article.innerHTML = `
      <h3>${article.title || '-'} - ${article.id}</h3>
      <p>作者：${article.author || '-'}</p>
      <p>内容：${article.content || '-'}</p>
      <div>
       <button id="del-btn-${article.id}">删除</button>
        <button id="update-btn-${article.id}">更新</button>
      </div>
      `;
      /*选中删除按钮和更新按钮*/
      del_btn = el_article.querySelector('#del-btn-' + article.id);
      update_btn = el_article.querySelector('#update-btn-' + article.id);
      /*为他们绑定点击事件*/
      bind_delete_btn(del_btn, article.id);
      bind_restore_data(update_btn, article);
      /*将卡片追加到文章列表中*/
      el_article_list.appendChild(el_article);
    })
  }

  /*监听一个删除按钮*/
  function bind_delete_btn(el, id) {
    el.addEventListener('click', function () {
      b.del(id);
      render();
    });
  }

  /*监听一个更新按钮*/
  function bind_restore_data(el, pack) {
    el.addEventListener('click', function () {
      set_form_value(el_article_form, pack)
    });
  }


  function set_form_value(el, pack) {
    /*迭代要写入的数据对象*/
    for (var key in pack) {
      var val = pack[key];
      var input = el.querySelector('[name=' + key + ']');
      if (!input) continue;
      input.value = val;
    }
  }




})();