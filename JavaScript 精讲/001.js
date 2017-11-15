// function c() {
//     return egg()
// }
// function egg() {
//     return C()
// }
// console.log(c() + 'came  first.')

// function power(base, exponent) {
//     if (exponent == undefinded)
//         exponent = 2;
//     var resulet = 1;
//     for (var cound = 0; cound < exponent; cound++)
//         result *= base;
//     return resulet
// }

// console.log((power(4)))


// function multiplier(factor) {
//     return function (nunber) {
//         return number * factor
//     }
// }
// var twice = multiplier(2);
// console.log(twice(5))


// function power(base, exponent) {
//     if (exponent == 0)
//     return 1;
//     else 
//     return base*power(base, exponent-1)
// }

// console.log(power(2,3))


// function findsolution(target) {
//     function find(strar, history) {
//         if (start == target)
//             return history;
//         else if (start > target)
//             return null;
//         else
//             return find(start + 5, '+history' + 5) ||
//                 find(start * 3, '+history' * 3)
//         return find(1, '1')
//     }
// }


// console.log(findsolution(24))

var products = {
    肉夹馍: {
        price: 10,
        stock: 200,
    }
}
var order = {};


// order.eat = prompt('你好,吃点啥?')
// if (!products[order.eat]) {
//     alert('不好意思 ,没有这项菜品')
//     console.log(order.eat)
// } else {
//     order.eat1 = prompt('您要几个')
//     if (!order.eat1) {
//         alert('别逗，快说')
//         console.log(order.eat1)
//     };
//     order.eat2 = confirm('这里吃吗?')
//     if (order.eat2 === false) {
//         alert('您是需要打包吗?')

//     }
//     if (order.eat2 === true) {
//         alert('你好看一下菜单' + order.eat + order.eat1 + order.eat2)
//     }
//     else {
//         alert('你好看一下菜单' + order.eat + order.eat1 + order.eat2)
//     }
// }


// var products = {
//     肉夹馍: {
//         price: 10,
//         stock: 200,
//     },
//     凉皮: {
//         price: 7,
//         stock: 100,
//     },
// }

// var order = {};

// boot();

// function boot() {
//     get_foodname();
//     get_count();
//     get_location();
//     // order_info();
// }
// function get_foodname() {
//     order = prompt('你好, 吃点啥 ?')
//     products[order] = products[order] || alert('麻烦再次输入')

// }


// function get_count() {

//     cound = prompt('需要几个')
//     cound = parseInt(cound)

//     var p = products.肉夹馍.stock
//     if (typeof (cound) !== 'number') {
//         return
//     }

//     if (cound > 4) {
//         re = confirm('先生您吃完吗');
//         if (re = false) {
//         } return get_count()
//     }

// }

// function get_location() {
//     order.location = confirm('在这里吃吗')
//     if (order.location = true) {
//         alert('好的,您点了' + order + order + '个')
//     }
// }

// function food_exist(foodname) {
//     return !!products[foodname];
// }

// function get_foodname(msg) {
//     /*指定默认值*/
//     msg = msg || '你好，吃点啥？';

//     /*得到产品名称*/
//     order.foodname = prompt(msg);

//     if (!order.foodname)
//         return;

//     /*如果产品不存在就重头执行*/
//     if (!food_exist(order.foodname)) {
//         get_foodname('谋，再点');
//     }
// }

// function get_count(msg) {
//     msg = msg || '好的，你要几个？'
//     order.count = parseInt(prompt(msg));

//     if (order.count === null)
//         return;

//     var p = products[order.foodname];

//     if (order.count > p.stock)
//         get_count('没那么多，现在一共有' + p.stock + '个，' + '要几个？');

//     if (!order.count) {
//         get_count('别闹，都挺忙的，你到底要几个？');
//     }
// }

// function get_location() {
//     order.location = confirm('带走吗？');
// }

// function order_info() {
//     alert('您要了' + order.count + '个' + order.foodname + '，请稍等');
// }



// var b = [
//     {
//         name: '王花花',
//     },
//     {
//         name: '王拴蛋',
//     },
//     {
//         name: '牛备备',
//     },
// ]
// function b(index) {
//     for (var i = 0; i < b.length; i++) {
//         var c = b[i]
//         if (index = b[i])

//     }
// }
// var p = b ('牛贝贝')
// console.log(p)


var b = [
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

function parent() {

}