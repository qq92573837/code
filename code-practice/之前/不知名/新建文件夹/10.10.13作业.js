var a=[
    {
      name: '王花花',
      salary: 100,
    },
    {
      name: '李拴蛋',
      salary: 200,
    },
    {
      name: '牛备备',
      salary: 300,
    },
  ]
var  y = []
  for (var i=0; i<a.length;i++) {
      var b =a[i]
      if(b.salary<200){
        y.push(b)
      }
  }
  console.log(y)