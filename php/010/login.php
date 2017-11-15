<?php

session_start();

$username=$_POST['username'];
$password=$_POST['password'];




if ($username=='whh'&&$password=='123') {
    $_SESSION['username']='whh';
    echo @$_SESSION['username'] . '登录成功';

    redirect('index.php');
} else {
    echo'密码或者用户名错误';
}


function redirect($url)
{
    header('location:'.$url);
}
