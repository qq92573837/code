
  
var  a = [
      {
        name: '王花花',
        playing: ['lol', 'ow', 'cs']
      },
      {
        name: '李拴蛋',
        playing: ['ow', 'cs']
      },
      {
        name: '刘备备',
        playing: ['lol', 'ow']
      },
    ];

var y = a
function p(u){
     y= []
    for (var i= 0;i<a.length;i++) {
        var b = a[i]
        if(a.playing.indexOf(u)!=-1)  {
            y.push(b)
        }
    }
}
function  p_p() {
    var card_list =document.querySelector('#a')
     vard_list.innerhtm =''
     for(var i =0 ;i<p_p.length;i++) {
         var b_b=p_p[i]
         var  card= document.createElement('div')
         card.innerHTML ='<h3>'+ user.name+'<h3>'
         card_list.appendChild(card)
     }
}
p('rl')
p_p()