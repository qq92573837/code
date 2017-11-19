;
(function () {
    'use strict'
    /**
     * 主要功能 增删改
     *  init
     *      render
     *          addArticle
     *          bindRemove
     *          bindUpdate
     *              setFormValue     
     *      bindSubmit
     *          getFormValue 
     */
    var elInputForm = document.querySelector("#input-form"); // 先择表单节点
    var elArticleList = document.querySelector("#article-list"); // 选择文章列表节点
    var list = Main.read(); // 获取文章列表

    init();

    function bindHidden() {
        var elHiddenButton = document.querySelector("#hidden-button");
        elHiddenButton.addEventListener("click", function () {
            if (!elInputForm.getAttribute("hidden")) { // 如果表单没有hidden属性，则添加hidden属性，更改按钮显示内容，隐藏表单
                elInputForm.setAttribute("hidden", "hidden");
                elHiddenButton.innerHTML = "显示表单";
            } else { // 如果表单有hidden属性，则移除hidden属性，更改按钮显示内容，显示表单
                elInputForm.removeAttribute("hidden");
                elHiddenButton.innerHTML = "隐藏表单";
            }
        });
    }

    function init() {
        // 初始化页面
        if (list) {
            render(); // 渲染页面
            bindSubmit(); // 给提交按钮绑定事件监听
        }
    }

    function setFormValue(article) {
        // 将文章内容重新填入表单，等待修改
        var inputList = elInputForm.children;
        for (var i = 0; i < inputList.length; i++) {
            var input = inputList[i];
            if (input.nodeName == "INPUT" || input.nodeName == "TEXTAREA") { //通过nodeName来判断是否是输入框
                var key = input.getAttribute("name"); // 输入框name属性值，作为对象的属性
                input.value = article[key]; // 给输入框填入对应值。此处会给一个隐藏的name为id的input设置value
            }
        }
    }

    function getFormValue() {
        //  获取输入框中的内容，以对象的形式返回给调用的地方
        var article = {};
        var inputList = elInputForm.children;
        for (var i = 0; i < inputList.length; i++) {
            var input = inputList[i];
            if (input.nodeName == "INPUT" || input.nodeName == "TEXTAREA") { // 通过nodeName来判断是否是输入框
                var key = input.getAttribute("name"); // 输入框name属性值就是文章对象的属性
                var value = input.value; // 输入框内的值就是文章的属性值
                input.value = ''
                article[key] = value;
            }
        }
        return article; // 返回一个文章对象
    }

    function bindSubmit() {
        // 给提交按钮绑定事件
        elInputForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var article = getFormValue(); // 接收表单返回的对象
            if (article.title && article.content && !article.id) { // 如果获取的对象中没有id，说明是添加文章
                Main.add(article); // 调用add操作数据
                render();
            } else if (article.title && article.content && article.id) { // 如果获取的对象中有id，说明是修改文章     
                Main.update(parseInt(article.id), article); // 修改文章返回的id是一个字符串，需要转换成数字
                render();
            } else {
                alert("输入不完整，请重新输入"); // 只允许author留空，title和content必须要填写
            }
        });
    }

    function bindUpdate(article) {
        // 点击更新按钮，调用setFormValue函数，将对应文章内容填入表单
        var elUpdateButton = document.querySelector(`#btn-update-${article.id}`);
        elUpdateButton.addEventListener("click", function () {
            setFormValue(article);
        });
    }

    function bindRemove(article) {
        //  给删除按钮绑定事件监听
        var elRemoveButton = document.querySelector(`#btn-remove-${article.id}`);
        elRemoveButton.addEventListener("click", function () {
            Main.remove(article.id); //执行删除操作
            render();
        });
    }

    function addArticle(article) {
        // 将文章插入到页面上
        var elArticle = document.createElement("div"); // 创建div标签
        // 添加标签内的内容（使用ES6方法）
        elArticle.innerHTML = `
            <h3 id=article-title-${article.id}>${article.title} (${article.id}) </h3>
            <span id=article-date-${article.id}>发表于：${article.date}</span>
            <span id=article-author-${article.id}>作者：${article.author}</span>
            <hr />
            <p id=article-content-${article.id}>${article.content}</p>
            <button id=btn-remove-${article.id}>删除</button>
            <button id=btn-update-${article.id}>更新</button>
            <button id=btn-comment-${article.id}>评论</button>
        `;
        elArticle.setAttribute("class", "single-article")
        elArticleList.appendChild(elArticle); //将创建的标签添加到elArticle
    }

    function render() {
        // 渲染页面
        bindHidden(); // 给显示隐藏表单按钮添加事件监听
        elArticleList.innerHTML = ''; // 清空页面
        list.reverse().forEach(function (article) {
            addArticle(article); // 将文章列表中的元素取出，添加到页面上，每篇文章添加删除和更新两个按钮
            bindRemove(article); // 给删除按钮绑定事件监听
            bindUpdate(article); // 给更新按钮绑定事件监听
        });
    }
})();