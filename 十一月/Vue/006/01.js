; (function () {
    'use strict';



    var form = document.getElementById('form')

    var list = [{
        name: 'nidaye',
        age: '12'
    }]

    render()

    function render() {
        form.innerHTML = '',
            list.forEach(function (user) {
                var el_user = document.createElement('div')
                el_user.innerHTML = `

            <h1>${user.name}</h1>
            
            
            `

                form.appendChild(el_user)
            }

            )
    }























})();