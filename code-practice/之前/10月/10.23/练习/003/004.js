;
(function () {
    'use strict';



    var article_list;
    var el_goods_form = document.querySelector('#goods-form');
    var el_goods = document.querySelector('#goods')

render()


    function bind_renewal(article) {


        var input = el_goods_form.children;

        // 获取 form 下的 children 节点的儿子们
        for (var i = 0; i < input.length; i++) { // 遍历 判断节点的名字 
            var b = input[i]

            if (b.nodeName === 'INPUT' || b.nodeName === 'TEXTAREA') { // 如果 他们的名字是 'input' 或者'textarea'
                var key = b.getAttribute('name') //  key = title 
                b.value = ''
                    console.log(key)
                b.value = article[key]; 
                // 
            }

        }

    }




    function render() {
        el_goods.innerHTML = ''
        article_list = b.read() //获得表单 

        article_list.forEach(function (goods) { //迭代这个article 表单的每一条
            var el_article = document.createElement('div');
           
            el_article.innerHTML = `

           
          <p>
          <h1>商品类型:${goods.username}</h1>
          </p> 
           <p>
           <h2>商品名称:${goods.age}</h2>
           <div>
           <button data-id='${goods.id}' id='btn-update${goods.id}'>更新</button>
           </div>
           <div>
           姓名:<input id=''name='username' id='btn-username-${goods.id}'value='${goods.username}'>
           年龄:<input id='${goods.id}' name='age 'id ='btn-age-${goods.id}'value='${goods.age}'>
           </div>
            
        `
            var btn_update = el_article.querySelector('#btn-update' + goods.id)
            btn_update.addEventListener('click', function () {
                var id = parseInt(btn_update.dataset.id)
                var article = b.read(id)
              
                bind_renewal(article)
                
            })




            el_goods.appendChild(el_article)
        })
    }





})();