var user_list = [
    {
        username: 'a',
        permission: ['admin']
    },
    {
        username: 'b',
        permission: ['hr']
    },


];

var list1 = [
    {
        username: 'a',
        permission: ['admin']
    },
    {
        username: 'b',
        permission: ['hr']
    },
];

function p (u,list) {
    var y =[]
    for (var i=0; i<list.length;i++) {
        var b = list[i]
        if(b.permission.indexOf(u)!=-1){
            y.push(b)
        }
    }
    return y
}

function t (c,list){
    for (var i =0;i<c.length;i++) {
        var b_b = c[i]
        list=p(b_b,list)
    }
    return  list
}


var  r  = t(['hr'],list1)
console.log(r)b  y