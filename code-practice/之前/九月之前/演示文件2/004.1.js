;
(function () {
    'use strict';

    // 定义                    接口                获取id  
    var el_article_list = document.querySelector('#articile_list')
    var el_article_form = document.querySelector('#article_form')


    init();


    function init() {
        render(); //渲染
        bind_submit(); //监听表单提交
    }


    //监听更新按钮
    function bind_restore_data(el, pack) {
        //监听方法
        el.addEventListener('click', function () {
            //迭代写入数据对象
            set_form_value(el_article_form, pack)
        })
    }

    function set_form_value(el, pack) {
        //迭代要写入的数据对象  
        for (var key in pack) {
            var val = pack[key];
            if (!input) continue;
            input.value = val
        }
    }



    // 监听删除按钮

    function bind_delete_btn(el, id) {
        //
        el.addEventListener('click', function () {
            b.del(id);
            render();
        })
    }


    //监听添加按钮 
    function bind_submit() {
        //表单提交            
        el_article_form.addEventListener('submit', function (e) {
            e.preventDefault() // 禁止一切默认操作

            //把表单变成对象
            var article = get_form_value(el_article_form);

            //判断是否有数字  有就是增加
            if (article.id) {
                b.update(parseInt(article.id), article);
            }
            // 如果有就增加
            else(
                b.add(article)
            )
            //渲染

            render()
        })
    }

    function get_form_value(el) {
        //初始化文章
        var data = {};
        //获取表单元素
        var input_list = el.children;
        //迭代表单的子元素
        for (var i = 0; i < input_list.length; i++) {
            var input = input_list[i];
            //如果这个子元素是 input 或者 textarea 
            if (input.nodeName == 'INPUT' || input.nodeName == 'TEXTAREA') {
                //给这个name的值添加成为新的一个键
                var key = input.getAttribute('name');
                //获取输入框的值
                var val = input.value;
                //清空元素中的值
                input.value = '';
                //为新文章添加一条属性
                data[key] = val;
            }
        }

        return data;
    }

    //渲染
    function render() {
        el_article_list.innerHTML = '';

        var addEventListener = b.read();

        list.forEach(function (article) {

            var del_btn;
            var update_btn;

            var el_article = document.createElement('div');

            el_article.classList.add('article-item');

            el_article.innerHTML = `
        
        <h3>${article.title||'-'} - ${article.id}</h3>
        <p>作者:${article.author||'-'}</p>

      
        <p>内容${article.content||'-'}</p>
        
        <div>
        <button id ='die-btn-${article.id}'>删除</button>
        <button id ='update-btn -${article.id}'>更新</button>
        </div>
  
        `

            del_btn = el_article.querySelector('#die_btn' + article.id)
            update_btn = el_article.querySelector('update-btn' + article.id)


            bind_delete_btn(del_btn, article.id);
            bind_delete_data(update_btn, article);

            el_article_list.appendChild(el_article)


        })


    }



























})();