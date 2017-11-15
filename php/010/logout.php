<?php

session_sbart();



unse($_SESSION['username']);


redirect('/');

function readdirect($url)
{
    header('Location:', $url);
}
