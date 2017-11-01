;
(function () {
    'use strict';


    var user_list = [];

    var el_list = $('#user')
    $.get('http://api.github.com/search/users?q=belle')
        .then(function (data) {
            user_list = data.items
            console.log(user_list)
            
            render()
        })

    function render() {
        user_list.forEach(function (user) {
            el_list.append(
                `
                    <div>
                    <img stule= 'width:300px' src ='${user.avatar_url}'>
                   用户名:${user.login}
                   用户id:${user.id}
                    </div>
                    
                    `
            )
        })


    }
























})();