<?php

session_start();

unset($_SESSION['username']);//删除

redirect('/');

function redirect($url)
{
    header('Location:'.$url);
}
