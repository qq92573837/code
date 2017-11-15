<?php

session_start();


$username=$_POST['username'];

$pass =$_POST['pass'];



if ($username=='whh'&& $pass=='123') {
    $_SESSION['username']='whh';
    ;
    echo "<script>alert('登录成功,欢迎')</script>";

    redirect('manage.php');
} else if($username!=='whh'&& $pass!=='123') {
    echo "'登录错误,密码或者用户名错误, 请重新登陆";
    
}


function redirect($url)
{
    header('location:'.$url);
}
