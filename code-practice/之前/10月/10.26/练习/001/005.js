;
(function () {
    'use strict';



    var article_list;


    var el_article_form = document.querySelector('#article-form');

    var el_article_list = document.querySelector('#article-list');

    init()

    function init() {
        render()
        bind_form_submit()
    }

    function get_form_data(el_article_form) {

        var input_list = el_article_form.querySelectorAll('[name]')
        var data = {};
        for (var i = 0; i < input_list.length; i++) {
            var input = input_list[i]
            var key = input.name;
            var val = input.value;
            data[key] = val;
        }
        return data
    }


    function submit_empty() {
        var input_list = el_article_form.querySelectorAll('[name]')
        input_list.forEach(function (input) {
            input.value = ''
        })
    }
222222

    function bind_form_submit() {
        el_article_form.addEventListener('submit', function (event) {
            event.preventDefault()
            var new_goods = get_form_data(el_article_form)
            if (new_goods.id) {
                new_goods.id = parseInt(new_goods.id)
                b.update(new_goods.id, new_goods)
                submit_empty()
                render()
            } else {
                b.add(new_goods);
                submit_empty()
                render()
            }

        })
    }




    function set_form_data(el_article_form, data) {
        var input_list = el_article_form.querySelectorAll('[name]');
        for (var key in data) {
            input_list.forEach(function (input) {
                if (input.name === key) {
                    input.value = data[key];
                }
            });
        }
    }





    function render() {
        el_article_list.innerHTML = '';
        article_list = b.read();

        article_list.forEach(function (article) {
            var el_article = document.createElement('tr');
            el_article.innerHTML = `
        <td>${article.name}</td>
        <td>${article.rate}</td>
        <td>${article.describe}</td>
        <td>${article.id}</td>
     
        <td>
        <label>
        <input class="checkbox-hot" type="checkbox">热卖
      </label>
      <label>
      <input class="checkbox-new" type="checkbox">新品
    </label>
        <td>
         <div>
                         <button data-id='${article.id}' id='btn-remove'>删除</button>
                         <button data-id='${article.id}' id ='btn-update'>修改</button>
      </div>
        `;
            var btn_remove = el_article.querySelector('#btn-remove');
            var btn_update = el_article.querySelector('#btn-update')
            btn_remove.addEventListener('click', function () {
                var id = parseInt(btn_remove.dataset.id)
                b.del(id)
                el_article_form.reset()
                render();

            });

            btn_update.addEventListener('click', function () {
                var id = parseInt(btn_update.dataset.id)
                set_form_data(el_article_form, article);
            })


            el_article_list.appendChild(el_article)
        })
    }














})();