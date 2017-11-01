; (function () {
    'use strict'

    var y = a;
    function p(u) {
        y = []
        for (var i = 0; i < a.length; i++) {
            var b = a[i]
            if (b.playing.indexOf(u) != -1) {
                y.push(b)
            }
        }
    }

    function t() {
        var c_c = document.querySelector('#woshi')
        c_c.innerHTML = '';
        for (var i = 0; i < y.length; i++) {
            var b = y[i]

            var c = document.createElement('div')
            c.innerHTML = '<h3>' + b.name + '</h3>'
            c_c.appendChild(c)
        }
    }

    t();


    function boot() {
        p('cs');
        t()
    }
   
    var btn = document.getElementById("button");
     btn.addEventListener('click',boot);





    // btn.onclick=function(){
    //     alert("wodeidj");
    // };


})()