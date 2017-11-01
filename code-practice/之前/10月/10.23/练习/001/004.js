;
(function () {
    'use strict';


    var article_list;
    var el_goods_form = document.querySelector('#goods-form');
    var el_goods = document.querySelector('#goods')

    init()


    function init() {
        render()
        bind_submit()
    }


    // --------------------------------更新----------------------------------

    function bind_renewal(article) {
        var input = el_goods_form.children;

        // 获取 form 下的 children 节点的儿子们
        for (var i = 0; i < input.length; i++) { // 遍历 判断节点的名字 
            var b = input[i]

            if (b.nodeName === 'INPUT' || b.nodeName === 'TEXTAREA') { // 如果 他们的名字是 'input' 或者'textarea'
                var key = b.getAttribute('name') //  key = title 
                b.value = ''

                b.value = article[key]; // 

            }

        }
    }



    //-------------------------------提交 -------------------

    function bind_submit() {
        el_goods_form.addEventListener('submit', function (event) {
            event.preventDefault()
            var inpit_list = el_goods_form.querySelectorAll('[name]')
            var data = {};

            for (var i = 0; i < inpit_list.length; i++) {
                var inpit = inpit_list[i]
                var key = inpit.name;
                var val = inpit.value
                data[key] = val
            }
            b.add(data)
            render()


        })
    }

    // ------------------------ 打印区域  -------------------------------
    function render() {
        el_goods.innerHTML = ''
        article_list = b.read() //获得表单 

        article_list.forEach(function (goods) { //迭代这个article 表单的每一条
            var el_article = document.createElement('div');
            el_article.innerHTML = `

           
          <p>
          <h1>商品类型:${goods.genre}</h1>
          </p> 
           <p>
           <h2>商品名称:${goods.title}</h2>
           </p>
            <p>
          <h3>  商品内容:${goods.content} <h3>
            </p> 
           <p> 
           <h4>商品编号:${goods.id}<h4>
           </p>
            <div>
            <button data-id='${goods.id}' id='btn-remove${goods.id}'>删除</button>
            <button data-id='${goods.id}' id ='btn-update${goods.id}'>更新</button>
            </div>
        `




            var btn_remove = el_article.querySelector('#btn-remove' + goods.id)
            btn_remove.addEventListener('click', function () {
                var id = parseInt(btn_remove.dataset.id)
                b.remove(id)
                render()
            })
            var btn_update = el_article.querySelector('#btn-update' + goods.id)
            btn_update.addEventListener('click', function () {
                var id = parseInt(btn_update.dataset.id)
                var article = b.read(id)
                bind_renewal(article)
            })


            el_goods.appendChild(el_article)
        })
    }

    //-------------------------------------------打印结束 -----------------------------











})();