;
(function () {
    'use strict';





    var user_list = [];

    var form = $('#search-form'); // form的元素
    var input = $('#search-input') //取值 input

    var el_result = $('.search-result') //渲染页面的div



    init()

    function init() {
        form.on('submit', function (e) {
            e.preventDefault()
            send(input.val())
            render()
        })
    }




    function send(keyword) {
        $.get('http://api.github.com/search/users?q=' + keyword)
            .done(function (data) {
                user_list = data.items
                render()
            })
    }

    function render() {
        el_result.html('');
        user_list.forEach(function (user) {
            var el_user = $('<div></div>')
            el_user.html(`
            
            <img src='${user.avatar_url}'>
                用户名<h1>${user.login}</h1>
            
            `)
            el_result.append(el_user)
        })
    }














})();