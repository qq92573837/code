 ;
(function () {
    'use strict';
    var goods, goods_id

    initialize()
    // del(2)
    //   add({你大爷:'ddd'})
    //  update(1, {你大爷:'对对对'} )



    function initialize() {
        goods = s.get('goods')
        goods_id = s.get('goods_id')
        if (!goods) {
            goods = [],
                s.set('goods', goods)
        }
        if (!goods_id) {
            goods_id = 0;
            s.set('goods_id', goods_id)
        }
    }

    //增加

    function add(pack) {
        var new_u = pack;
        new_u.id = goods_id + 1;
        goods.push(new_u);
        sync()
        s.set('goods_id', goods_id + 1);
    }

    function sync() {
        s.set('goods', goods);
    }


    function find_index(id) {
        return goods.findIndex(function (inem) {
            if (inem.id === id)
                return true
        })

    }
    //删除

    function del(id) {
        var shit_index = find_index(id)

        if (shit_index === -1) {
            return;
        }
        goods.splice(shit_index, 1)
        sync()
    }

    //修改 



    function update(id, pack) {
        var index = find_index(id);
        var article = goods[index];
        goods[index] = Object.assign({}, article, pack);
        sync();
    }

    function find(id) {
        return goods.find(function (inme) {
            return inme.id = id;
        })
    }

    //查询
    function read(id) {
        if (id)
            return find(id);
        return goods;
    }













})();