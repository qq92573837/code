;
(function () {
    'use strict';

    var article_list;

    var el_article_form = document.querySelector('#article-form'); //定义母元素
    var el_article_list = document.querySelector('#article-list') //定义母元素

    init()


    function init() {
        render();
        bind_submit()
    }
    //-------------------------------更新开始-----------------------------------------------------//

    function  delete_event(el_article, article) {
        var btn_update = el_article.querySelector('#btn-update' + article.id);
        btn_update.addEventListener('click', function () {
            var id = parseInt(btn_update.dataset.id)
        

            var ccc = b.read(id)
            console.log(ccc)

            set_form_value(ccc);
        })
    }

    function set_form_value(ccc) {
        var input_list = el_article_form.children; // 获取 form 下的 children 节点的儿子们

        for (var i = 0; i < input_list.length; i++) { // 遍历 判断节点的名字 
            var b = input_list[i]
            console.log(b)
            if (b.nodeName === 'INPUT' || b.nodeName === 'TEXTAREA') { // 如果 他们的名字是 'input' 或者'textarea'
                var key = b.getAttribute('name') //  key = title 
                b.value = ''

                b.value = ccc[key]; // 

            }

        }
    }




    //-------------------------------------更新结束---------------------------------------------------------//


    //-------------------------------------提交开始-------------------------------------------------//
    //迭代所有input 找出选择的属性 
    function get_form_data(farm) {

        var input_list = el_article_form.querySelectorAll('[name]'); //找到母元素下的 name属性
        var data = {};
        for (var i = 0; i < input_list.length; i++) { //迭代所有的input 
            var input = input_list[i]
            var key = input.name; //找出 input 中 name填写的内容

            var val = input.value; //input 输入的值

            data[key] = val; //输入的值就等于 存入的值

        }
        return data;
    }

    function bind_submit() {
        el_article_form.addEventListener('submit', function (event) {
            //监听更新按钮
            event.preventDefault(); //取消浏览器默认
            var new_article = get_form_data(); //获的到get

            if (new_article.id) {
                new_article.id = parseInt(new_article.id) // 让文章的id 从字符串变成数字
                b.update(new_article.id, new_article)
                render()
            } else {
                b.add(new_article); //添加到表单 
                el_article_form.reset() //
                render()
            }
        })
    }


    //--------------------------------------提交结束--------------------------------------------//


    function render() {
        el_article_list.innerHTML = '', //清空

            article_list = b.read(); //获取文章列表


        article_list.forEach(function (article) { //迭代每一条
            var el_article = document.createElement('div'); //创建元素 
            //元素添加html
            el_article.innerHTML = ` 
                        <h2> 标题:${article.title}
                         作者:${article.author} 
                         内容:${article.content}
                         编号:${article.id}</h2> 
                         <div>
                         <button data-id='${article.id}' id='btn-remove${article.id}'>删除</button>
                         <button data-id='${article.id}' id ='btn-update${article.id}'>更新</button>
                            </div>
                         `;

                         delete_event(el_article, article)

            //-----------------------------------删除开始------------------------------------------------//


            var btn_remove = el_article.querySelector('#btn-remove' + article.id); //获取id
            btn_remove.addEventListener('click', function () { //监听事件
                var id = parseInt(btn_remove.dataset.id) //获取删除id
                //监听事件 加删除事件
                b.remove(id, )
                render()
            })
            //--------------------------------------删除结束------------------------------------------------//

            el_article_list.appendChild(el_article);


        })
    }




})();