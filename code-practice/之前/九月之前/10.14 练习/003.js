; (function () {
    var y = a
    function p(u) {
        y = []
        for (var i = 0; i < a.length; i++) {
            var b = a[i]
            if (b.playing.indexOf(u)!=-1) {
              y.push(b)  
             
            }        
    }
    }

    function t() {
        var c = document.querySelector('#woshi')
             c.innerHTML = '';
        for (var i=0; i<  y .length;i++){                                  
            var b = y[i]

            var el = document.createElement('div');
            el.innerHTML= '<h3>'+ b.name+ '</h3>'

            c.appendChild(el)
        }
    }
 t()
function toop() { 
    p('cs')
     t();
 };
 var u = document.getElementById('button');
 u.addEventListener('click',toop);











})()