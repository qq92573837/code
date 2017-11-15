
<?php

session_start();


$url ='./img/' . rand(1000, 9999) . '.jpg';

$tmp_name = @$_FILES['avatar']['tmp_name'];

if ($tmp_name) {
  move_uploaded_file($tmp_name, $url);
  file_put_contents('img.json',$url);
} else {
  die('文件有误');
}
