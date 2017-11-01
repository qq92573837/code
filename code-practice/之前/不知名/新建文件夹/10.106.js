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





function p(u, list) {
    var y = []
    for (var i = 0; i < list.length; i++) {
        var b = list[i]
        if (b.permission.indexOf(u) != -1) {
            y.push(b)
        }
    }
    return y;
}

function f (b_list, list) {
    var c = list
    for (var i = 0; i < b_list.length; i++) {
        var k = b_list[i]
        c = p (k,  c)
    }
    return c
}


var r =f(['admin'], user_list, );
console.log(r);

var r = f(['admin'], list1);
console.log( r);


