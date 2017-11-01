var a=[
    {
      name: '王花花',
      playing: ['CS', '红警'],
    },
    {
      name: '李拴蛋',
      playing: ['守望屁股', '吃鸡', 'CS'],
    },
    {
      name: '牛备备',
      playing: ['红警', '吃鸡'],
    },
    {
      name: '木哈哈',
      playing: ['红警', 'CS', '吃鸡'],
    },
  ]

  function  p(u,list) {
      var y =[]
      for(var i=0;i<list.length;i++) {
          var b = list[i]
          if(b.playing.indexOf(u)!=-1) {
            y.push(b)
          }
      }
      return y
  }
  
function t (u_u,list) {
    for (var i =0;i<u_u.length;i++) {
        var  b_b = u_u[i] 
        list = p(b_b,list)
    }
    return  list
}

var  r  = t(['红警', 'CS', '吃鸡'],a)
console.log(r)