<!-- <?php
$user_list =[
   [
       'name'=>'whh',
       'age'=>'10',
   ],
   [
    'name'=>'xxm',
    'age'=>'10',
] ,
   ];

   $whh =[
    'name'=>'whh',
    'age'=>13,
]

?> -->
<!-- <h1>用户列表</h1>
<?php foreach($whh as $key =>$value):?>

<div><?php echo $key ?>: <?php echo $value ?></div>
<?php endforeach?> -->


<!-- <h1> 用户列表</h1>
<?php foreach($user_list as $user):?>
    <div><?php echo $user['name'] ?></div>
<?php endforeach?>
结束 endforeach -->
<!-- 
<h1> 用户列表</h1>
<?php foreach($user_list as $user):?>
<div><?php echo $user['name']?></div>
<div><?php echo $user['age']?></div>
<?php endforeach?> -->



<?php
$user_list =[
   [
       'name'=>'whh',
       'age'=>'10',
   ],
   [
    'name'=>'xxm',
    'age'=>'10',
] ,
   ];

   $whh =[
    'name'=>'whh',
    'age'=>13,
]

?>

<h1>用户列表</h1>
<?php foreach($user_list as $user):?>

<div><?php echo $user['name']?></div>
<?php endforeach ?>