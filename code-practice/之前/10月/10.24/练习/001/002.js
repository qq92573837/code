;
(function () {
    'use strict';





    // /* 选中.box */
    // var box = document.querySelector('#box');
    // /* 选中开关 */
    // var toggle_box = document.querySelector('#toggle-box');

    // /* 当开关被点击时 */
    // toggle_box.addEventListener('click', function () {
    //     /*倒置元素的隐藏状态，此处也可手动添加样式实现*/
    //     box.hidden = !box.hidden;

    // });

    //   var log_log = document.querySelector('#log')
    //     var pre = document.querySelector('pre')
    //        log_log.addEventListener('click', function () {
    //         var username = document.querySelector('[name=username]').value;
    //         var password = document.querySelector('[name=password]').value;

    //         var gender = document.querySelector('[name=gender]').checked;
    //         var love_me = document.querySelector('[name=love_me]').checked;

    //         pre.innerHTML = `
    //   <h1>姓名:${username}</h1>  
    //   <h2>年龄:${password}</h2>
    //   <h3>性别:${gender}</h3>
    //   <h4>你说呢:${love_me}</h4>


    //     `


    //     })


    // var form = document.querySelector('form')
    // var setter = document.querySelector('#setter')
    // var user = {

    //     username: "猴头哪里跑",
    //     intro: "Paolo"
    // }
    // setter.addEventListener('click', function () {
    // for (var key in user) {
    //         var input = form.querySelector(`[name=${key}]`);
    //         if (!input) {
    //             continue;
    //         }
    //         input.value = user[key]
    //     }
    // })


    var form = document.querySelector('form')
    var setter = document.querySelector('#setter')

    var user = {
        username: '猴头',
        age: 'Paolo'
    }

    setter.addEventListener('click',function(){
        for ( var key in nuse) {
            var input = form.querySelectorAll('name=${key}')
        }
    })





















})();