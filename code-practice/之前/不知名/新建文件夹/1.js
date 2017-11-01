var mingzi = 'wang'
var 错误次数 = '0'

function denglu(yonghu, mima) {
    if (yonghu == mingzi && mima == '12345') {
        当输入正确()
        登录成功();
        return true;
    } else {
        当输入错误()
        登录错误();
        return false;
    }
}

function 登录成功() {
    console.log('欢迎' + mingzi)
}

function 登录错误() {
    console.log('登录错误')
}

function  当输入正确() {
     登录成功(mingzi)
}

function 当输入错误() {
    登录错误();
    计算输入次数();
}


function 计算输入次数() {
    计算输入次数++;
    if (错误次数 > 2) {
    console.log('请输入验证码');

    }
    return 错误次数;
}

denglu(mingzi,'12345')