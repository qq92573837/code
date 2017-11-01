;
(function () {
    'use strict';



    var link_list = $('[data-link]')

    var page_list = $('[data-page]')

    init()

    function init() {
        link_list.forEach(function (link) {
            link.addEventListener('click', function () {
                render()
            })


        })
    }




















})();