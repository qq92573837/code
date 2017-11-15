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
<h1>商品提交</h1>

<form action="add.php"  method="post" enctype='multipart/form-data'>

商品名称:
<input type="text" name='name'><br>

商品价格:
<input type="text" name 'paice'><br>

商品图片:
<input type="file" name='avatar'><br>
<button type='submit'>提交</button>
</form>

商品图片:
<?php
$url=file_get_contents("./img.json");
    echo "<img src=$url alt=''  width=200px >";
?>
    
</body>
</html>
