;
(function () {
    'use strict';

    window.b = {
        add: add,
        remove: remove,
        update: update,
        read: read,
    }


    var goods_list, last_id;

    init_data();

    function init_data() {
        goods_list = s.get('goods_list') || [];
        last_id = s.get('last_id') || 0;
    }

    function sync() {
        s.set('goods_list', goods_list);
    }

    function find(id) {

    }


    function find_index(id) {
        return goods_list.findIndex(function (article) {
            return article.id === id;
        })
    }
    
    function add(article) {
        if (!article || !article.name,article.price,article.referral)
            return;

        last_id++;
        article.id = last_id;

        goods_list.push(article);

        sync();
        s.set('last_id', last_id);
    }

    function remove(id) {
        var shit_index = find_index(id);
        if (shit_index === -1) return;

        goods_list.splice(shit_index, 1);
        sync();
    }

    function update(id, patch) {
        var article_index = find_index(id);
        if (article_index === -1) return;

        var article = goods_list[article_index];
        goods_list[article_index] = Object.assign({}, article, patch)
        sync();
    }

    function read(id) {
        if (id)
            return goods_list.find(function (article) {
                return article.id === id;
            });
        return goods_list;
    }

})();