<?php
session_start();

class Product
{
    public $db;
    public function __construct()
    {
        $this->db = new PDO('mysql:dbname=ec;host=localhost;charset=utf8', 'root', '', [
            /* 常用设置 */
            PDO::ATTR_CASE => PDO::CASE_NATURAL, /*PDO::CASE_NATURAL | PDO::CASE_LOWER 小写，PDO::CASE_UPPER 大写， */
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, /*是否报错，PDO::ERRMODE_SILENT 只设置错误码，PDO::ERRMODE_WARNING 警告级，如果出错提示警告并继续执行| PDO::ERRMODE_EXCEPTION 异常级，如果出错提示异常并停止执行*/
            PDO::ATTR_ORACLE_NULLS => PDO::NULL_NATURAL, /* 空值的转换策略 */
            PDO::ATTR_STRINGIFY_FETCHES => false, /* 将数字转换为字符串 */
            PDO::ATTR_EMULATE_PREPARES => false, /* 模拟语句准备 */
        ]);
    }
    public function add($row)
    {

        $title = @$row['title'];
        $price = @$row['price'];
        $cat_id = @$row['cat_id'];
        $stock = @$row['stock'] ?: 0;

        if (!$title || !$cat_id || !$stock) {
            return ['success' => false, 'msg' => '缺少添加条件'];
        }
        if (!is_numeric($cat_id) || !is_numeric($stock)) {
            return ['success' => false, 'msg' => '填写的不是数字'];
        }
        $sql = $this->db->prepare("insert into product(title,price,cat_id,stock)
        values('{$title}','{$price}','{$cat_id}','{$stock}')")->execute();

        // $r = $aql->execute();

        return $sql ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];
    }
    public function del($row)
    {

        $id = $row['id'];
        var_dump($id);

        if (!is_numeric($id)) {
            return ['success' => false, 'msg' => '删除的id不是数字'];
        }
        var_dump($id);
        $r = $this->db->prepare("delete from product where id= :id")->execute(['id' => $id]);
        return $r ? ['success' => true] : ['success' => false, 'msg' => '没删除成功'];
    }

    public function update($row)
    {
        $id = @$row['id'];
        if (!is_numeric($id)) {
            return ['success' => false, 'msg' => '没id'];
        }

        $xin = $this->db->prepare("select * from product where id=:id");
        $xin->execute(['id' => $id]);
        $old = $xin->fetch(PDO::FETCH_ASSOC);
        if (!$old) {
            return ['success' => false, 'msg' => '没找到'];
        }

        $merged = array_merge($old, $row);
        $this->db->prepare('update product set title=:title, price=:price, cover_src=:cover_src, stock=:stock, des=:des, cat_id=:cat_id where id =:id')->execute($merged);

    }

    public function read($row)
    {
        $title = @$_GET['title'];

        $b = $this->db->prepare("select * from product where title=:title");
        $b->execute(['title' => $title]);
        return $b->fetchAll(PDO::FETCH_ASSOC);

    }

    public function new_read()
    {
        $b = $this->db->prepare('select * from product limit 10;');
     
        $b->execute();
    
        return $b->fetchAll(PDO::FETCH_ASSOC);
    }
}

// $product = new Product();


// var_dump($product->add(['title' => '红米', 'cat_id' => 10, 'stock' => 1200, 'price' => 1234]));
// var_dump($product->update([
//     'id' => 4,
//     'title' => 'apple手机',
//     'stock' => 10,

// ]));
// var_dump($product->read([
//     'title' => 'apple手机',
// ]));
