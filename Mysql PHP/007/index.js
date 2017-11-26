; (function () {
    'use strict';
    var product_list = [];

    var cat_list = [];

    var el_product_list = document.querySelector('#product-list');
    var el_select = document.querySelector('#product-select');
    var el_product_from = document.querySelector('.product-from');



    //```````````````````````````方法``````````````````````````````
    init();
    function init() {
        get_product_list();
        get_cat_list();
        add_product_list();
    }

    function add_product_list() {

        el_product_from.addEventListener('submit', function (e) {
            e.preventDefault();

            var input_list = el_product_from.querySelectorAll('[name]');
            var row = {};
            input_list.forEach(function (input) {
                var key = input.name;
                var value = input.value;
                row[key] = value;
            })
            add_product_list_apl(row);
        })

    }



    function render_cat_select() {
        el_select.innerHTML = '';
        cat_list.forEach(function (cat) {
            var el = document.createElement('option');
            el.value = cat.id;
            el.innerText = cat.title;
            el_select.appendChild(el);
        })
    }
    function get_cat_list() {
        $.get('./cat_product.php?model=cat&action=read')
            .then(function (r) {
                cat_list = r.data;
                render_cat_select();
            })
    }

    function get_product_list() {

        $.get('./cat_product.php?model=product&action=read')
            .then(function (r) {
                product_list = r.data;
                render_product_list();
            })
    }





    function add_product_list_apl(row) {
        if (row.id) {
            $.post('./cat_product.php?model=product&action=update', row)
                .then(function (r) {
                    console.log(r);
                    if (r.success)
                        get_product_list();
                    render_product_list();
                })

        } else {
            $.post('./cat_product.php?model=product&action=add', row)
                .then(function (r) {
                    if (r.success)
                        get_product_list();
                    render_product_list();
                })
        }
    }

    function del_product_apl(product) {
        $.post('./cat_product.php?model=product&action=del', product)
            .then(function (r) {
                var r = r.success = true;
                if (r) {
                    get_product_list();
                    render_product_list();
                }
            })

    }

    function update_product_apl(product) {
        var input_list = el_product_from.querySelectorAll('[name]');
        input_list.forEach(function (input) {
            var name = input.name;
            input.value = product[name];
        })
    }





    function render_product_list() {
        el_product_list.innerHTML = '';

        product_list.forEach(function (product) {
            var el = document.createElement('tr');
            el.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.cat_id}</td>
            <td>${product.stock}</td>
            <td>
            <button class='del-btn'>删除</button>
            <button class='update-btn'>更新</button>
            </td>
 `;
            el_product_list.appendChild(el);
            var del_btn = el.querySelector('.del-btn');
            var update_btn = el.querySelector('.update-btn');

            del_btn.addEventListener('click', function () {
                del_product_apl(product)
            })
            update_btn.addEventListener('click', function () {
                update_product_apl(product);
            })


        })
    }






























})();
