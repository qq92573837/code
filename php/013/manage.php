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
<h1>商品管理</h1>

<form action="way.php" method="post" enctype='multipart/form-data'>

<input type="text" name='name'><br>
<input type="text" name='price'><br>
<input type="file" name='avatar'><br>
<button type='submit'>提交</button>
</form>


<div>
    <?php $a= file_get_contents('json.json');
          $b= json_decode($a, true);
    foreach ($b as $i => $y) {
        // var_dump($y);
          
       echo  '<h2>'.$y['name'].'</h2>';
    
      
        $url=$y['img'];
    
        
           
        echo "<img src=$url >";
    }
    
    
    ?>
    </div>

</body>
</html>
