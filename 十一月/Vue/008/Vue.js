; (function () {
    'use strict';

    var el_form = document.querySelector('#form')
    var el_list = document.querySelector('#show')
    var goods_list;

    function btn_update() {
        
    }



    render()


    function render() {
        el_list.innerHTML = '';
        goods_list = b.read()
        goods_list.findIndex(function (goods) {
            var el_goods = document.createElement('div')

            el_goods.innerHTML = `
            
         <h1>  ${goods.genre}</h1>
         <button data-id='${goods.id}' id='del_atore${goods.id}'>删除</button>
         <button data-id='${goods.id}' id ='btn-update${goods.id}'>更新</button>
         
            
            `


            var btn_del = el_goods.querySelector('#del_atore' + goods.id)
            btn_del.addEventListener('click', function () {
                var id = parseInt(btn_del.dataset.id)
                b.del(id)
                render()
            })

            el_list.appendChild(el_goods)

        })
    }














})();