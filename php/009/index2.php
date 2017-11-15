<?php


session_start();

$username=$_GET['username'];//从页面获得 userbane

$password =$_GET['password'];//从页面获得 password


if ($username=='lll'&& $password=='yoyoyo') {
    $_SESSLOON['username']='lll';

    echo '登录成功';
    redirect('/');
}

function redirect($url){
    header('Location:'.$url);
}