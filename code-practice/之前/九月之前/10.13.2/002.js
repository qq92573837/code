
; (function () {
    'use strict';
    var y = a

    function p(u) {
        y = []
        for (var i = 0; i < a.length; i++) {
            var b = a[i]
            if (b.playing.indexOf(u) != -1) {
                y.push(b)
            }
        }
    }

    //生成html

    function list() {
        var c_list = document.querySelector('#woshi')
        c_list.innerHTML = ''

        for (var i = 0; i < y.length; i++) {
            var b = y[i]
            var c = document.createElement('div')
            c.innerHTML = '<h3>' + b.name + '</h3>';

            c_list.appendChild(c)

        }

    }
    // p('cs')
    // list()

    var btn = document.getElementById('button')
    btn.onclick = function () {
       
    }



})()
























