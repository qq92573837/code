<?php


session_start();


unse($_SESSLON['$username']);


redirect('/');

function redirect($url)
{
    header('location:'.$url);
}
