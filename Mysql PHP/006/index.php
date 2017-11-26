<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>



      <form id='product-from'>
      <input type="hidden" name="id" value><br>

            <label for="">
                标题:
                <input type="text" name='title'>

            </label>
            <br>
            <label for="">
                价格:
                <input type="text" name='price'>

            </label>
            <br>
            <label for="">
                库存:
                <input type="text" name='stock'>
            </label>
            <br>
            <label for="" >
                分类
                <select name="cat_id" id="cat-selector"></select>
            </label>
            <br>
            <button type="submit">提交</button>
</form>


                <div id='product-list'></div>





    <div>
 <form id='cat-from'>
            <label for="">
            <input type="hidden" name="id" value><br>

                标题:
                <input type="text" name='title'>
                <button type="submit">提交</button>
            </label>
</form>




    <div id='cat-list' border="1">  </div>

</div>

    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src='product.js'></script>

</body>

</html>
