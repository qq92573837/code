<?php

require_once 'product.php';
$product = new Product();
$goods_list = $product->new_read();

// require_once 'gateway.php';
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
<div>

<table border="1">
<?php foreach ($goods_list as $list): ?>

  <tr>

    <th>商品id</th>
    <th>标题</th>
    <th>价格</th>
    <th>分类id</th>
    <th>库存</th>
  </tr>
  <tr>
  <td><?php echo $list['id'] ?></td>

    <td><?php echo $list['title'] ?></td>
    <td><?php echo $list['price'] ?></td>
    <td><?php echo $list['cat_id'] ?></td>
    <td><?php echo $list['stock'] ?></td>
  </tr>
  <?php endforeach;?>
</table>
</div>

</body>
</html>