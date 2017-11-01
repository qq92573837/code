;
(function () {
    'use strict'

    var article_list, last_id;

    window.b = {
        article_list: article_list,
        last_id: last_id,
        add: add,
        del: del,
        update: update,
        read: read,
    }

    init_data();

    function init_data() {
        article_list = s.get('article_list');
        last_id = s.get('last_id');

        if (!article_list) {
            article_list = [];
            sync();
        }

        if (!last_id) {
            last_id = 0;
            s.set('last_id', last_id);
        }
    }

    function add(pack) {
        pack.id = last_id + 1;
        article_list.push(pack);

        sync();
        s.set('last_id', last_id + 1);
    }

    function del(id) {
        var shit_index = find_index(id);

        if (shit_index === -1)
            return;

        article_list.splice(shit_index, 1);
        sync();
    }

    function find_index(id) {
        return article_list.findIndex(function (article) {
            return article.id === id;
        });
    }

    function find(id) {
        return article_list.find(function (article) {
            return article.id === id;
        });
    }

    function update(id, pack) {
        var index = find_index(id);
        var article = article_list[index];
        article_list[index] = Object.assign({}, article, pack);
        sync();
    }

    function read(id) {
        if (id)
            return find(id);
        return article_list;
    }

    function sync() {
        s.set('article_list', article_list);
    }
})();