// var a = [2, 4, 6, 8, 10]

// var y = []
// for (var i = 0; i < a.length; i++) {
//     var b = a[i]
//         y.push (b)
// }
// console.log(y)

// var y =''
// var  a =['y', 'o', 'o', 'o']

// for (var i=0; i<   a.length;i++){                  
//     var b = a[i]                
//       y=y+b

// }
// console.log(y)



var a =[1, 3, 2, 7, 6]

function  p() {
    var y = []
    for (var i=0; i<   a.length;i++){
        var  b= a[i] 

        if(b%2){
            y.push(b)
        }                                 


    }
    return y
}

p()



// var a =[1, 2, 3, 4, 5]
//     var y=[]
// for (var i=0; i<  a .length;i++){                                  
//     b = a[i]
//     y.push(b)

// }
// console.log(y)


// var a =

//     [
//         {
//             name: '王花花',
//             salary: 100,
//         },
//         {
//             name: '李拴蛋',
//             salary: 200,
//         },
//         {
//             name: '牛备备',
//             salary: 300,
//         },
//     ]
//     var y = []
//     for (var i=0; i<  a .length;i++){                                  
//         var  b = a[i]
//         if(b.salary <200){
//             y.push(b)
//         }

//     }
//     console.log(y)


// var  a =[
//     {
//       name: '王花花',
//     },
//     {
//       name: '王拴蛋',
//     },
//     {
//       name: '牛备备',
//     },
//   ]
//   var  y = []
//   for (var i=0; i< a  .length;i++){                                  
//     var b = a[i]
//      if(b.name[0]='王'){
//          y.push(b)
//      }
// }
// console.log(y)

// var a =[
//     {
//       name: '王花花',
//       playing: ['CS', '红警'],
//     },
//     {
//       name: '李拴蛋',
//       playing: ['守望屁股', '吃鸡', 'CS'],
//     },
//     {
//       name: '牛备备',
//       playing: ['红警', '吃鸡'],
//     },
//   ]

// function p(u) {
//     var  y = []
//     for (var i=0; i< a  .length;i++){                                  
//         var b = a [i]
//         if(b.playing.indexOf(u)!=-1){
//             y.push (b)
//         }

//     }
//      return  y
//     }

//     var r  = p('吃鸡')
//     console.log(r)



// var a = [
//     {
//         name: '王花花',
//         playing: ['CS', '红警'],
//     },
//     {
//         name: '李拴蛋',
//         playing: ['守望屁股', '吃鸡', 'CS'],
//     },
//     {
//         name: '牛备备',
//         playing: ['红警', '吃鸡'],
//     },
//     {
//         name: '木哈哈',
//         playing: ['红警', 'CS', '吃鸡'],
//     },
// ]
// function  p(u, list) {
//     var  y = []
//     for (var i=0; i< a  .length;i++){                                  
//         var b = a[i]
//         if(b.playing.indexOf(u)!=-1) {
//             y.push(b)
//         }
        
//     }
//     return y
// }


// function  t(u_u,list){
//     for (var i=0; i< u_u.length;i++){
//         var b_b= u_u[i]
//         list = p(b_b,list)                                  
 
//     }
//     return list
// }

// var  r= t(['吃鸡'],a)
// console.log(r)

// var arr = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'];

//   var level = 1;
//   var y = [];

//   function p(list) {
//     var y1 = [];
//     for (var i = 0; i < list.length; i++) {
//       var b = list[i];
//       if (b.constructor === Array) {
//         p(b);

//       } else {
//         y1.push(b);
//       }
//     }

//     y.push(y1);
//     console.log( y);
//   }
