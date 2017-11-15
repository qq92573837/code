<?php

session_start();


$username=$_POST['username'];

$pass=$_POST['pass'];

if ($username=='whh'&&$pass=='1234') {
    $_SESSION['username']='whh';
    redirect('/');
} else  {
    echo  '密码或者用户名错误';
}

function redirect($url)
{
    header('location:'.$url);
}
