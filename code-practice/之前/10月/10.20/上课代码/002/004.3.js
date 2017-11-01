;
(function () {
        'use strict';

        function render() {
                else_article_list.innerHTML = '';
                var list = b.read();
                list.forEach(function (article) {
                        var del_bun;
                        var update_btn;
                        var el_article = document.createElement('div');
                        el_article.classList.add('article_item');
                        el_article.innerHTML = `
                        <h2>${article.title||'-'}-${article.id}</h2>
                        <p>作者:${article.author||'-'}</p>
                        <p>内容:${article.content||'-'}</p>
                        <div>
                        <button id ='die-btn-${article.id}'>删除</button>
                        <button id = 'update-btn-${article.id}'>更新</button>
                        </div>
                        `;
                        del_bun = el_article.querySelector('#del-btn-' + article.id);
                        update_btn = el_article.querySelector('#update-btn' + article.id)

                         bind_delete_btn ()       


                })
        }





























})();