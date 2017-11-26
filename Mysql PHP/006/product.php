<?php

class Product
{
    public $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function add($row)
    {
        var_dump($row);
        $title = @$row['title'];
        $price = @$row['price'];
        $stock = @$row['stock'];
        $cat_id = @$row['cat_id'];

        if (!$title) {
            return ['success' => false, 'msg' => '条件不够'];
        }

        $sql = $this->db->prepare("insert into product(title,price,stock,cat_id) values('{$title}','{$price}','{$stock}','{$cat_id}')");
        $r = $sql->execute();

        return $r ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];

    }

    public function del($row)
    {
        $id = $row['id'];

        $r = $this->db->prepare('delete from product where id= :id');

        $r->execute(['id' => $id]);

        return $r ? ['success' => true] : ['success' => false, 'msg' => '没删除成功'];
    }

    public function update($row)
    {
        var_dump($row);
        $db = $this->db;
        $id = (int) $row['id'];

        $r = $db->prepare("select * from product where id= :id");
        $r->execute(['id' => $id]);

        $old = $r->fetch(PDO::FETCH_ASSOC);
        $m = array_merge($old, $row);

        $y = $db->prepare("update product set title=:title,price=:price,cat_id=:cat_id,stock=:stock,cover_src=:cover_src,des=:des where id=:id")->execute($m);
        return $y ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];
    }

    public function read()
    {
        $page = (int) @$_GET['page'] ?: 1;

        $list = 3;

        $offset = $list * ($page - 1);

        $r = $this->db->prepare("select * from product order by id desc limit :offset, :list");

        $r->execute(['offset' => $offset, 'list' => $list]);
        $ass = $r->fetchAll(PDO::FETCH_ASSOC);
        return $ass;

    }

}
