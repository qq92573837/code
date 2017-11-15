<?php
session_start();

$username=$_POST['username'];
$pass=$_POST['pass'];


if ($username=='whh'&&$pass='123') {
    $_SESSION['username']='whh';

    echo '登录成功';
    redirect('addpage.php');
} else {
    echo '密码错误或者用户名错误';
}

function redirect($url)
{
    header('location:'.$url);
}
