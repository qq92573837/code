<?php

require_once  'goods.php';

$list =$goods->read()?:[];

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

<form action="goods.php" method="post"   enctype='multipart/form-data'>
<input type="hidden" name="action" id="" value='add'>
    <input type="text" name='title'><br>

    <input type="text" name='price'><br>

    <input type="file" name='avatar'><br>

    <button type='submit'>提交</button>

</form>

<div>
<?php  foreach ($list as $goods) :?>

<div> <?php echo@$goods['title'] ?></div>

<div><?php echo @$goods['price'] ?></div>

<div><img src="<?php echo @$goods['avatar'] ?>" alt=""></div>
    <?php  echo @$goods['id'] ?>
    <a href="/goods.php?action=del&id==<?php echo @$goods['id'] ?>">删除</a>

<?php endforeach ;?>
</div> 

</body>
</html>
