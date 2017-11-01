;
(function () {
    'use strict';

    var goods_list, goods_id


    init()


    function init() {
        goods_list = s.get('goods_list');
        goods_id = s.get('goods_id');

        if (!goods_list) {
            goods_list = [];
            s.set('goods_list', goods_list)
        }
        if (!goods_id) {
            goods_id = 0;
            s.set('goods_id', goods_id)
        }
    }
    // add({
    //     name:1111
    // })



    function add(patch) {
        if (!patch)
            return
        goods_id++;
        patch.goods_id = goods_id;
        goods_list.push(patch);
        s.set('goods_list', goods_list)
        s.set('goods_id', goods_id)
    }

    del(1)


    function find_index(id) {
        return goods_list.findIndex(function (article) {
            return article.id === id;
        })
    }

    function del(id) {
        var shit_index = find_index(id);
        if (shit_index === -1) return;

        goods_list.splice(shit_index, 1);
        s.set('goods_list', goods_list)
    }










})();