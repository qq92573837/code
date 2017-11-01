
var a = [
    {
      username: 'a',
      per: ['admin']
    },
    {
      username: 'b',
      per: ['hr']
    },
    {
      username: 'c',
      per: ['hr', 'admin']
    },
    {
      username: 'd',
      per: ['hr', 'manager']
    },
    {
      username: 'e',
      per: ['js_programmer', 'py_programmer', 'manager', 'admin']
    },
    {
      username: 'f',
      per: ['java_programmer', 'py_programmer']
    },
  ];
var y= []
function p (u,list) {
  for (var i=0;i<list.length;i++) {
    var b= list[i]
    if(b.per.indexOf(u)!=-1){
      y.push(b)
    }
  }
  return y
}

function t(c,list) {
  for(var i=0; i<c.length;i++){
      var  b_b=c[i]
      list = p(b_b,list)
  }
  return list
}

var r = t(['java_programmer'] ,a)
console.log(r)