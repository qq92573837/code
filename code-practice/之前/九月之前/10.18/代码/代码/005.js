;
(function () {
    'use strict';
    var goods, goods_id;
    initialize()
    //    add({
    //             你大爷: 'ddd'
    //       })
    del(1)

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

    function add (pask) {
    var new_goods= pask;
    new_goods.id = goods_id+1;
    goods.push(new_goods)
    sync()
    s.set('goods_id',goods_id+1)
    }
    function sync() {
        s.set('goods',goods)
    }



    function find (id){
        return  goods.findIndex(function(inme){
            if(inme.id===id){
                return true
            }
        })
    }
    function del(id) {
        var index = find(id) 
        if(index===-1) {
            return
        }
        goods.splice(index, 1)
        sync()
    }









})();