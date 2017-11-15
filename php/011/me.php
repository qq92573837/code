<?php

session_start();


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="upload.php" method="post" enctype="multipart/form-data">
用户名：
  <input type="text" name="username"><br>
  头像：
  <input type="file" name="avatar">
    <button type="submit">提交</button>
    
    </form>
    
</body>
</html>
