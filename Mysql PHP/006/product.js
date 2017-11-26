
; (function () {
    'use strict';





    var product_list = [];
    var cat_list = [];
    var el_product_list = document.querySelector('#product-list');
    var el_cat_list = document.querySelector('#cat-list');
    var el_cat = document.querySelector('#cat-selector');


    var el_product_from = document.querySelector('#product-from');
    var el_cat_from = document.querySelector('#cat-from');



    init();
    function init() {
        get_product_list();
        get_cat_list();
        render_product_list();
        render_cat_list();
        product_add();
        cat_add();
    }




    function product_add() {

        el_product_from.addEventListener('submit', function (e) {

            e.preventDefault();
            var input_list = el_product_from.querySelectorAll("[name]");
            var row = {};
            for (var i = 0; i < input_list.length; i++) {
                var list = input_list[i];
                var key = list.name;
                var value = list.value;
                if (!value) {
                    continue;
                }
                row[key] = value;
            }
            get_product_list();
            render_product_list();
            product_add_update_apl(row);
        })

    }


    function cat_add() {
        el_cat_from.addEventListener('submit', function (e) {
            e.preventDefault();
            var input_list = el_cat_from.querySelectorAll('[name]');
            var row = {};
            for (var i = 0; i < input_list.length; i++) {
                var input = input_list[i]
                var key = input.name;
                var value = input.value;
                row[key] = value;
            }
            get_cat_list();
            render_cat_list();
            cat_add_update_apl(row);
        });
    }
    function product_add_update_apl(row) {
        if (row.id) {
            var promise = $.post('./cat_product.php?model=product&action=update', row)
        } else {
            var promise = $.post('./cat_product.php?model=product&action=add', row)
        }
        promise.then(function (r) {
            if (r.success) {
                get_product_list();
                render_product_list();
            }
        })



    }


    function get_product_list() {

        $.get('./cat_product.php?model=product&action=read&page=1')
            .then(function (data) {
                product_list = data;
                render_product_list();
            })
    }

    function get_cat_list() {
        $.get('./cat_product.php?model=cat&action=read&page=1')
            .then(function (data) {
                cat_list = data;
                render_cat_product(cat_list);
                render_cat_list();

            })
    }

    function render_cat_product(cat_list) {
        el_cat.innerHTML = '';
        for (var i = 0; i < cat_list.length; i++) {
            var input = cat_list[i]

            var el = document.createElement('option');
            el.value = input.id;
            el.innerText = input.title;
            el_cat.appendChild(el);
        }

    }

    function del_prodoct(id) {
        console.log(id)
        var ok = confirm('确定要删除吗');

        if (!ok) {
            return
        }
        var promise = $.post('./cat_product.php?model=product&action=del', { id: id })
            .then(function (r) {
                if (r.success) {
                    get_product_list();
                    render_product_list();
                }
            })
    }
    function update_product(item) {
        var input_list = el_product_from.querySelectorAll('[name]');
        console.log(input_list);
        input_list.forEach(function (input) {
            var name = input.name;

            input.value = item[name];
        })

        // for (var key in item) {
        //     var input = el_product_from.querySelector(`[name=${key}]`);

        //     if (input)
        //         input.value = item[key];
        // }
    }


    function render_product_list() {
        el_product_list.innerHTML = '';
        product_list.forEach(function (item) {
            var product = document.createElement('div');

            product.innerHTML = `
            <h5>  商品id: ${item.id} </h5>
            <h5>  商品标题: ${item.title} </h5>
            <h5>  商品价格: ${item.price} </h5>
            <h5>  商品库存: ${item.stock} </h5>
            <h5>  商品分类: ${item.cat_id} </h5>
         
   
         <button class='del'>删除</button>
         <button class='update'>更新</button><hr>
                       
                       `;

            var del_product_btn = product.querySelector('.del');
            var update_btn = product.querySelector('.update');

            del_product_btn.addEventListener('click', function () {
                del_prodoct(item.id);

            })
            update_btn.addEventListener('click', function () {
                update_product(item);
                console.log(item);
            })
            el_product_list.appendChild(product);

        })
    }

    function del_cat(id) {
        var ok = confirm('确定要删除吗');

        if (!ok) {
            return
        }
        var del = $.post("./cat_product.php?model=cat&action=del", { id: id })
            .then(function (r) {
                if (r.success)
                    get_cat_list();
                render_cat_list();
            })
    }


    function cat_add_update_apl(row) {
        if (row.id) {

            var r = $.post('./cat_product.php?model=cat&action=update', row);

        } else {
            var r = $.post('./cat_product.php?model=cat&action=add', row);

        }


        r.then(function (r) {
            if (r.success) {
                get_cat_list();
                render_cat_list();
            }
        })
    }
    function update_cat(item) {
        var input_list = el_cat_from.querySelectorAll('[name]');

        console.log(input_list)

        input_list.forEach(function (input) {
            var name = input.name;
            input.value = item[name];
        })
    }


    function render_cat_list() {

        el_cat_list.innerHTML = '';
        cat_list.forEach(function (item) {


            var cat = document.createElement('div');
            cat.innerHTML = `
            
            <h4>分类id:${item.id}</h4>
            <h4>分类标题:${item.title}</h4>
            <button class ='del_cat' >删除</button>
            <button class ='update_cat' >更新</button><hr>
             `;
            el_cat_list.appendChild(cat);
            var del_cat_btn = cat.querySelector('.del_cat')
            var update_cat_btn = cat.querySelector('.update_cat')
            del_cat_btn.addEventListener('click', function () {
                del_cat(item.id);
                console.log(item.id);
            });
            update_cat_btn.addEventListener('click', (function (id) {
                return function () {
                    update_cat(item);
                }
            })(item.id));
        })
    }



})();