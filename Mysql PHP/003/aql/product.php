<?php

class Product
{
    public $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    // public function add($row)
    // {

    //     $title = @$row['title'];
    //     $price = @$row['price'];
    //     $cat_id = @$row['cat_id'];
    //     $stock = @$row['stock'] ?: 0;

    //     if (!$title || !$price || !$cat_id) {
    //         return ['success' => false, 'msg' => '没title,price'];
    //     }
    //     if (!is_numeric($cat_id) || !is_numeric($stock)) {
    //         return ['success' => false, 'msg' => '填写的不是数字'];
    //     }

    //     $sql = $db->prepare("insert into product(title,price,cat_id,stock) values('{$title}','{$price}','{$cat_id}','{$stock}')");
    //     $r = $sql->execute();

    //     return $r ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];

    // }

    public function add($row)
    {
        $title = @$row['title'];
        $price = @$row['price'];
        $cat_id = @$row['cat_id'];
        $stock = @$row['stock'] ?: 0;

        if (!$title || !$price || !$cat_id) {
            return ['success' => false, 'msg' => 'invalid:title||price||cat_id'];
        }

        if (!is_numeric($price) || !is_numeric($cat_id) || !is_numeric($stock)) {
            return ['success' => false, 'msg' => 'invalid:price||cat_id||stock'];
        }

        $db = $this->db;

        $sql = $db->prepare("
          insert into product
          (title, price, cat_id, stock)
          value ('{$title}','{$price}', '{$cat_id}', '{$stock}')");
        $r = $sql->execute();
        return $r ?
        ['success' => true] :
        ['success' => false, 'msg' => 'db_internal_error'];
    }
    public function remove($row)
    {
        $id = $row['id'];
        if (!is_numeric($id)) {
            return ['success' => false, 'msg' => 'mei id'];
        }

        $r = $this->db->prepare('delete from product where id= :id')->execute(['id' => $id]);

        return $r ?
        ['success' => true] : ['success' => false, 'msg' => '没成功'];

    }

    public function update($row)
    {
        $id = $_GET['id'];
        var_dump($id);
        if (!is_numeric($id)) {
            return ['success' => false, 'msg' => '没id'];
        }

        $statement = $this->db->prepare('select * from product where id=:id');

        $statement->execute(['id' => $id]);

        $old = $statement->fetch(PDO::FETCH_ASSOC);

        if (!$old) {
            return ['success' => false, 'msg' => '更新没找到'];
        }

        $merged = array_merge($old, $row);

        // var_dump($merged);die();

        $this->db->prepare('update product set title=:title, price=:price, cover_src=:cover_src, stock=:stock, des=:des, cat_id=:cat_id where id =:id')->execute($merged);
    }

    public function read()
    {
        // $title = @$row['title'];
        // $price = @$row['price'];
        // $id = @$row['id'];

        $page = (int) @$_GET['page'] ?: 1;
        $title = @$_GET['title'];
        $price = @$_GET['price'];
        $id = @$_GET['id'];

        // $limit = 5;
        // $offset = $limit * ($page - 1);
        // $s = $this->db->prepare('select * from product limit :offset, :limit');
        // $s->execute(['offset' => $offset, 'limit' => $limit,]);

        $b = $this->db->prepare('select * from product  where title=:title');
        $b->execute(['title' => $title]);
        return $b->fetchAll(PDO::FETCH_ASSOC);
    }

}
// $product = new Product();

// var_dump($product->read());

// var_dump($product->add([
//     'title' => '酷派手机' ,
//     'price' => 544,
//     'stock' => 332233,
//     'cat_id' => 1,

// ]));
