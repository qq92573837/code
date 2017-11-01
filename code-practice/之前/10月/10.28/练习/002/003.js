;
(function () {
    'use strict';
    window.b = {
        read: read,
        add: add,
        update: update,
        del: del
    }


    var goods_list, goods_id

    init()

    function init() {
        goods_list = s.get('goods_list', )
        goods_id = s.get('goods_id', )

        if (!goods_list) {
            goods_list = [];
            s.set('goods_list', goods_list)
        }
        if (!goods_id) {
            goods_id = 0;
            s.set('goods_id', goods_id)
        }
    }

    read()

    // add({
    //     name: '111',
    //     age: '13',

    // })



    function add(pack) {
        goods_id++
        pack.id = goods_id
        goods_list.push(pack)
        s.set('goods_id', goods_id)
        s.set('goods_list', goods_list)

    }

    function find_index(id) {

        return goods_list.findIndex(function (goods) {
            if (goods.id === parseInt(id))
                return true
        })
    }

    function del(id) {
        var new_del = find_index(id)
        if (new_del === -1) {
            return
        }
        goods_list.splice(new_del, 1)
        s.set('goods_list', goods_list)
    }


    function update(id, pack) {
        var index = find_index(id)
        if (index === -1)
            return
        goods_list[index] = Object.assign({}, goods_list[index], pack)
        s.set('goods_list', goods_list)
    }


    function read(id) {
        if (id) {
            return goods_list.find(function (goods) {
                if (goods.id === id) {
                    return true
                }
            })
        }
        return goods_list
    }

































})();