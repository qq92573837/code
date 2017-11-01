; (function () {
    'use strict';


    var prduct, prduct_id

    initialize()


    function initialize() {
        prduct = s.get('prduct');
        prduct_id = s.get('prduct_id')
        if (!prduct) {
            prduct = []
            s.set('prduct', prduct)
        }
        if (!prduct_id) {
            prduct_id = 0;
            s.set('prduct_id', prduct_id)
        }
    }


    function add(name, price, describe, ) {
        var  product_task = {
            id: s.get('prduct_id') +1,
            name:name,
            price:price,
            describe:describe,

        }
        prduct.push(product_task)
        self()
        preserve()
    }

    function self() {
       s.set('prduct_id',prduct_id+1)
    }
    function preserve(){
        s.set('prduct',prduct)
    }


add('萌萌的','$111','叫爷爷给你喝')








})();












