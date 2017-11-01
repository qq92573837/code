;
(function () {
    'use strict';



    var new_form = $('#form')
    var new_val = $('#val')
    var new_user = $('#user')



    new_form.on('submit', function (e) {
        e.preventDefault()
        var r = $.get('https://api.github.com/users/${new_form[0].value}')
      console.log(r)
        r.then(function (data) {
            render(data)
        })
    })


    function render(data) {
        new_user[0].innerHTML = '';
        for (i in data) {
            console.log(i)
            el = document.createElement('div')
            el.initEvent = `
                   ${i};
                ${data[i]};
            
            
            `
            new_user.append(el)
        }
    }




















})();