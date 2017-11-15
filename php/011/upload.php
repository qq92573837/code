<!-- <?php

$tmp_name=@$_FILES['avatar']['tmp_name'];

if ($tmp_name) {
    move_uploaded_file('$tmp_name','./img/'.rand(1000, 9999).'png');
} else {
    die('文件有误');
}?> -->


<?php

$tmp_name = @$_FILES['avatar']['tmp_name'];

if ($tmp_name) {
  move_uploaded_file($tmp_name, './img/' . rand(1000, 9999) . '.jpg');
} else {
  die('文件有误');
}