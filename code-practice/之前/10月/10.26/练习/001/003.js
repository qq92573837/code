;
(function () {
    'use strict';

    window.b = {
        add: add,
        del: del,
        update: update,
        read: read,
    }


    var goods_list, goods_id
    init()


    function init() {
        goods_list = s.get('goods_list')
        goods_id = s.get('goods_id')

        if (!goods_list) {
            goods_list = []
            s.set('goods_list', goods_list)
        }
        if (!goods_id) {
            goods_id = 0;
            s.set('goods_id', goods_id)
        }
    }

    // add({name:'爽歪歪',rate:888,describe:'就是不给你喝'})

    function add(pack) {
        if (!pack||!pack.name || !pack.rate) {
            alert("输入不完整，请重新输入");
            return
        }
        goods_id++
        pack.id = goods_id ;

        goods_list.push(pack);
        sync()
        s.set('goods_id', goods_id)
    }

    function sync() {
        s.set('goods_list', goods_list)
    }


    function find_index(id) {
        return goods_list.findIndex(function (goods) {
            if (goods.id == parseInt(id))
                return true
        })

    }

    function del(id) {
        var remove = find_index(id)
        if (remove === -1)
            return
        goods_list.splice(remove, 1)
        sync()
    }


    function update(id, pack) {
        var index = find_index(id);
        if (index === -1)
            return

        var artiocle = goods_list[index]
        goods_list[index] = Object.assign({}, artiocle, pack)
        sync()
    }





    function read(id) {
        if (id) {
            var index = find_index(id);
            if (index !== -1)
                return goods_list[index];
        }

        return goods_list;
    }









})();