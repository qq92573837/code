;
(function () {
    'use strict';
    var goods, goods_id

    initialize()
    del(15)
    //    add({
    //         你大爷: 'ddd'
    //   })
    //  update(1, {你大爷:'对对对'} )

    //...........  初始化 ..........

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
    //..........  增加  ..............
    function add(pack) {
        var new_goods = pack;
        new_goods.id = goods_id + 1;
        goods.push(new_goods)

        sync()
        self()
    }
    // ........保存.............   
    function sync() {
        s.set('goods', goods)
    }
    // ...... 自增..............
    function self() {
        s.set('goods_id', goods_id + 1)
    }
    // '''''''''''' '结束'''''''''''''''''''''''

    //.............删除开始.......................}

    function find_index(id) {
        return goods.findIndex(function (inme) {
            if (inme.id = id) {
                return true
            }
        })
    }
    function del(id){
        var new_goods= find(id) 
        if(new_goods===-1){
            return
        }
        goods.splice(new_goods,1)
        sync()
    }
//''''''''''''''''结束'''''''''''''''''''''''''

  function  update (id,pack) {
      var index = find_index(id) 
      var article = goods[index]
      goods[index]=Object.assign({},article,pack)
      sync
  }







})();