; (function () {

    var y = a;

    function p(u) {
        y = []
        for (var i = 0; i < a.length; i++) {
            var b = a[i];
            if (b.name.indexOf(u) != -1) {
                y.push(b)
                
            }
            else if(b.name == u){
                y.push(b)

            }
        }
    }
 
    function t() {
        var c = document.querySelector('#woshi')
        c.innerHTML = ''
        for (var i=0; i<  y .length;i++){                                  
            var b = y [i] 

        var el = document.createElement('div')
        el.innerHTML = '<h3>' + b.name+ '</h3>' 
       
        c.appendChild(el)     
        }
    }

t();

function boot(){
    t()
p('cs')
}

var bon = document.getElementById('button')
bon.addEventListener('click',boot)


// var form = document.querySelector('form');
// var  input = form.querySelector('input');
// form.addEventListener('submit',function(e){
//     e.preventDefault()



// }
 var form = document.querySelector('form')
var input = form.querySelector('input');
var keyword;
/*当form提交时*/
form.addEventListener('submit', function (e) {
    /*禁止默认行为（整页提交跳转）*/
    e.preventDefault();
    
    /*获取关键词*/
    keyword = input.value;
  p(keyword) ;
 t();
console.log(keyword);






})




})()