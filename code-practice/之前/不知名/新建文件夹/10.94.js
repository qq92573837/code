var a = [
    {
        username: 'whh',
        type: '吃土',
        工资: 100,
        老公工资: 1000,
        name: '王花花'
    },
    {
        username: 'b',
        type: '土豪',
        工资: 200,
        老公工资: 1000,
    },
    {
        username: 'c',
        type: '吃土',
        工资: 300,
        老公工资: 1000,
    },
    {
        username: 'd',
        type: '土豪',
        工资: 100,
        老公工资: 2000,
    },
];


function 列出用户总工资() {
    for (var i = 0; i < a.length; i++) {
        var user = a[i];
        var 她的工资 = user.工资;
        var 她老公的工资 = user.老公工资;
        var 她的总工资 = 她的工资 + 她老公的工资;
        console.log(她的总工资);
    }
}

function  ( )












function 列出用户自我介绍() {
    for (var i = 0; i < a.length; i++) {
        var user = a[i];
        var 她的名字 = user.name;
        var 她的总工资 = user.工资 + user.老公工资;
        if (!她的名字) {
            var 自我介绍前半段 = '我没名字，yo';
        } else {
            var 自我介绍前半段 = '我叫' + 她的名字;
        }
        var 自我介绍 = 自我介绍前半段 + '，我有' + 她的总工资 + '块钱';
        console.log(自我介绍);
    }
}





列出用户总工资()
列出用户自我介绍()