<?php

session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登陆</title>
</head>
<body>

<h1>商品权限</h1>

<form action="login.php" method="post" ><br>
 <input type="text" name='username'  placeholder='用户名'><br>
 <input type="text"name='pass'  placeholder='密码'>
 <button type='submit'>登录</button>
 
 </form>

</body>
</html>
