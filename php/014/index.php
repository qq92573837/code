<?php
session_start();
require_once 'goods.php';

$list= $goods->read()?:[];
var_dump($list);
echo '2' ;
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
    <form action="goods.php" method="post" enctype='multipart/form-data'>
    <input type="hidden" name="action" value="add">
   <input type="text" name='title'><br>
        <input type="text" name='price'><br>
        <input type="file" name='avatar'><br>
        <button type='submit'>提交</button>
    </form>
    <div class='goods-list'>
    <?php foreach ($list as $goods) : ?>
       
    <div class='goods-item'>
    
    <div class='title'><?php  echo @$goods['title']?></div>
    <div class='price'><?php  echo  @$goods['price']  ?></div>
  
    <div class="avatar"> <img src="<?php echo @$goods['avatar'] ?>" alt=""></div>

    <?php endforeach ;?>
    </div>
    
    
    

    </div>

</body>
</html>
