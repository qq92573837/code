;
(function () {
    'use strict';




var  elInputform = document.querySelector('#input-form')

var  elArtixcList =document.querySelector('#article-list')
//选择表单节点  html


var list = main.read();  //获取文章列表


init()

function init(){
    if(list){
        render()//渲染页面
        bindSubmit() // 给提交按钮绑定事件监听
    }
}

function bindSubmit(){
    elInputform.addEventListener('submit',function(e){
        e.preventDefault();
         var article = getFormValue();//接受表单返回的对象
        if(article)
    })
}
















})();