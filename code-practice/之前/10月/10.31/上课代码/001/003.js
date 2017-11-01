;
(function () {
    'use strict';



    var goods_list, goods_id
    init()

    function init() {
        goods_list = s.get('goods_list')
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
    // add({
    //     name:'ddd',
    //     age:'12'
    // })



    function add(pack) {
        if (!pack)
            return

        goods_id++
        pack.id = goods_id
        goods_list.push(pack)
        s.set('goods_list', goods_list)
        s.set('goods_id', goods_id)
    }

    function fion_index(id) {
        return goods_list.findIndex(function (next) {
            if (next.id == id)
                return true
        })
    }

    function del(id) {
        var rm = fion_index(id)
        if (rm === -1)
            return

        goods_list.splice(rm, 1)
        s.set('goods_list', goods_list)
    }




    function update(id, enb) {
        var index = fion_index(id)
        if (index === -1) {
            return
        }
        goods_list[index] = Object.assign({}, goods_list[index], enb)
        s.set('goods_list', goods_list)
    }





    function rend(id) {
        if (id) {
            return goods_list.find(function (next) {
                if (next.id === id) {
                    return true
                }
            })
        }
        return goods_list
    }































})();