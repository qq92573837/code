; (function () {
    'use strict';
    var goods_list, goods_id;

    window.b = {
        add: add,
        update: update,
        read: read,
        del: del,
    }



    init();



    function init() {
        goods_list = s.get('goods_list');
        goods_id = s.get('goods_id')
        if (!goods_list) {
            goods_list = [];
            s.set('goods_list', goods_list)
        }
        if (!goods_id) {
            goods_id = 0;
            s.set('goods_id', goods_id)
        }
    }
    // add({ genre: '敌敌畏' })

    function add(pack) {
        if (!pack)
            return
        goods_id++;
        pack.id = goods_id;
        goods_list.push(pack)
        s.set('goods_list', goods_list)
        s.set('goods_id', goods_id)
    }
    read(1)

    // update(1, {
    //     genre: '11'

    // })

    function find_index(id) {
        return goods_list.findIndex(function (goods) {
            return goods.id === id
        })
    }


    function del(id) {
        var index = find_index(id)
        if (index === -1)
            throw '没找到id'
        goods_list.splice(index, 1)
        s.set('goods_list', goods_list)
    }


    function update(id, p) {
        var get = find_index(id)
        if (get === -1)
            throw '没找到id'
        goods_list[get] = Object.assign({}, goods_list[get], p)
        s.set('goods_list', goods_list)
    }


    function read(id) {
        if (id) {
            return goods_list.find(function (goods) {
                return goods_id === id
            })
        }
        return goods_list
    }
























})();