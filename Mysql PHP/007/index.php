<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>


    <div>
<form class='product-from'>

<input type="hidden" name="id" id=""><br>
<input type=""  name='title' value=""placeholder="商品标题" size="22" ><br>
<input type=""  name='price' value="999"placeholder="商品价格" size="22" ><br>
<input type=""  name='stock' value="200"placeholder='商品库存' size='22'><br>
<select name="cat_id" id="product-select"></select><br>

    <button type="submit">提交</button>

</form>
<table  border="1" >
<thead>
<tr>
          <th>商品标题</th>
          <th>商品价格 </th>
          <th>商品分类</th>
          <th>商品库存</th>
          <th>操作数据</th>
    </tr>
</thead>
<tbody id='product-list'  >

</tbody>

</table >
</div>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src='index.js'></script>

</body>
</html>
