;
(function () {
    'use strict';

    var user_list = []
    var el_user_list = $('#user')
    $.get('http://api.github.com/search/users?q=belle')
        .then(function (data) {
            console.log(data)
            user_list = data.items
            render()
            console.log('成功')
        }).fail(function (e) {

            console.log('失败')
        }).always(function () {
            console.log('总是')
        })

    function render() {
        user_list.forEach(function (user) {
            el_user_list.append(
                `<div>
          头像:  <img style= 'width:300px' src='${user.avatar_url}'alt=''>
            用户名:${user.login} 
            用户id :${user.id}
               </div>`
            )
        })
    }

























})();