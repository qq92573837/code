;
(function () {
    'use strict';






    var data_link = document.querySelectorAll('[data-link]')
    var data_page = document.querySelectorAll('[data-page]')


    init()

    function init() {
        data_link.forEach(function (link) {
            link.addEventListener('click', function () {

                data_page.forEach(function (page) {
                    page.hidden = true;
                    if (link.dataset.link === page.dataset.page)
                        page.hidden = false;
                })
            })
        })
    };





















})();