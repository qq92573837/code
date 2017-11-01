;
(function () {
    'use strict';
   
    window.b = {
        add: add,
        remove: remove,
        update: update,
        read: read,
    }


    var article_list, last_id;

    init_data();

    function init_data() {
        article_list = s.get('article_list') || [];
        last_id = s.get('last_id') || 0;
    }

    function sync() {
        s.set('article_list', article_list);
    }

    function find(id) {
        return article_list.find(function (article) {
            return article.id === id;
        })
    }

    function find_index(id) {
        return article_list.findIndex(function (article) {
            return article.id === id;
        })
    }
   
    function add(article) {
        if (!article || !article.title)
            return;

        last_id++;
        article.id = last_id;

        article_list.push(article);

        sync();
        s.set('last_id', last_id);
    }

    function remove(id) {
        var shit_index = find_index(id);
        if (shit_index === -1) return;

        article_list.splice(shit_index, 1);
        sync();
    }

    function update(id, patch) {
        var article_index = find_index(id);
        if (article_index === -1) return;

        var article = article_list[article_index];
        article_list[article_index] = Object.assign({}, article, patch)
        sync();
    }

    function read(id) {
        if (id)
            return article_list.find(function (article) {
                return article.id === id;
            });
        return article_list;
    }

})();