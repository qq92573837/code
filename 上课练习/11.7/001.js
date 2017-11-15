; (function () {
    'use strict';



    // function Person() {//构造函数
    //     this.name = '';
    //     this.age = '';
    // }
    // var whh = new Person()
    // Person.prototype.skin = 'yellow';
    // console.log(whh)

    // whh.prototype = Object.create(Person.prototype)
    // console.log(whh)


    // Object.create({ a: 1, 2: 3 })//创建一个属性

    // var a = Object.create(null) //最底层的
    // a.al = 2

    // var a = {
    //     a: 1,
    //     b: 2,
    //     c: function () { },
    //     d: true,
    // }




    Object.defineProperty(obj, 'key', {
        value: 11,

        configurable: true,
        //configurable  这个配置决定对象属性是否可以删除

        writable: true,
        //当configuration 为false的时候 writable为false  delete删除不了 
        //当configuration 为true的时候  writable也为false  delete可以删除
        //当configuration 为true的时候  writable也为true  deleta 也可以删除

        enumerable: false,
        // enumerable的值为true  才可以使用for（prop in obj） Object.keys()

    })





    function Parent() {
    }

    Parent.prototype.run = true;

    /*==================================*/

    var Child = new Parent()
    /* 先继承爸爸的prototype*/
    Child.prototype = Object.create(Parent.prototype);
    /*
     然后设置独有的继承属性 */
    Child.prototype.fly = true;

    /*恢复构造器*/
    Child.prototype.constructor = Child;

    var child = new Child();

    // /*====================*/

    // function SubChild() {
    // }

    // SubChild.prototype = Object.create(Child.prototype);
    // SubChild.prototype.constructor = SubChild;

    // var subchild = new SubChild();



    function Parent(name, age, ) {
        this.name = name;
        this.age = age;
    }
})();