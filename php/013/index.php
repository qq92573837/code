<?php
session_start()
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
<h1>登录验证<h1>
    
    <form action="login.php" method="post">
    
    <input type="text" name='username'>

    <input type="text" name='pass'>
    
    <button type='submit'>登录</button>
    </form>
  
</body>
</html>
