;
(function () {
    'use strict';

    var article_list;

    var el_article_form = document.querySelector('#article-form');
    var el_article_list = document.querySelector('#article-list')

    init()


    function init() {
        render();
        bind_submit()
    }


    function get_form_data(farm) {
        var data = {};
        var input_list = farm.querySelectorAll('[name]');
        var data = {};
        for (var i = 0; i < input_list.length; i++) {
            var input = input_list[i]
            var key = input.name;
            var val = input.value;
            data[key] = val;
        }
        return data;
    }


    function bind_submit() {

        el_article_form.addEventListener('submit', function (event) {
            event.preventDefault();
            var new_article = get_form_data(el_article_form);
            b.add(new_article);
            el_article_form.reset()
            render()
        })
    }

    function render() {
        el_article_list.innerHTML = '',

            article_list = b.read();


        article_list.forEach(function (article) {
            var el_article = document.createElement('div');

            el_article.innerHTML = `
                        <h2> 标题:${article.title}
                         作者:${article.author} 
                         内容:${article.content}
                         编号:${article.id}</h2> 
                         <div>
                         <button data-id='${article.id}' id='btn-remove${article.id}'>删除</button>
                         <button data-id='${article.id}' id ='btn-update${article.id}'>更新</button>
                            </div>
                         `;


            var btn_update = el_article.querySelector('#btn-update' + article.id);
            btn_update.addEventListener('click', function () {
                var id = parseInt(btn_update.dataset.id)

                b.update(id, )
                console.log(id)
                render()
            })



            var btn_remove = el_article.querySelector('#btn-remove' + article.id);
            btn_remove.addEventListener('click', function () {
                var id = parseInt(btn_remove.dataset.id)
                console.log(id)
                b.remove(id,patch)
                render()
            })


            el_article_list.appendChild(el_article);
             el_article_list.appendChild(el_article)

        })
    }




})();