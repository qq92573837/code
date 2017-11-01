function a(cb){
    console.log('我是主函数');
    cb();
}


function b() {
    console.log ('我是回调函数')
}

function c() {
    console.log ('我是回调函数2')
}

a(b,c)