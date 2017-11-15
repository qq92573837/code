<?php

session_start();

$username=$_GET['username'];
$password=$_GET['password'];

if ($username=='whh'&&$password=='yoyoyo') {
    $_SESSION['username']='whh';
    echo @$_SESSION['username'] . '登录成功';

    redirect('/');  
}


function redirect($url)
{
    header('location:'.$url);
}
