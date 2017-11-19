<?php

session_start();


$username=$_POST['username'];

$pass =$_POST['pass'];



if ($username=='whh'&& $pass=='123') {
    $_SESSION['username']='whh';
    ;
    echo "<script>alert('登录成功,欢迎')</script>";

    redirect('manage.php');
} elseif ($username!=='whh'&& $pass=='123') {
    // echo "'登录错误,密码或者用户名错误, 请重新登陆";
    echo "<script>alert('密码错误,请从新输入')</script>";
    echo @$_SESSION['username'] . '欢迎登录';
} elseif ($username=='whh'&&$pass!=='123') {
    echo "<script>alert('用户名错误,请从新输入')</script>";
    header("Refresh:1;url=/index.php");
} elseif ($username!=='whh'&&$pass!=='123') {
    $a= @$_SESSION['username'] . '欢迎登录';
    echo "<script>alert(<?php $a?>)</script>";
    header("Refresh:1;url=/index.php");
}



function redirect($url)
{
    header('location:'.$url);
}
