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
        // $title = @$row['title'];
        // $cat_id = @$row['cat_id'];
        // $stock = @$row['stock'];
        // $des = @$row['des'];
        // $price = @$row['price'];
        $title = @$row['title'];
        $price = @$row['price'];
        $stock = @$row['stock'];
        $cat_id = @$row['cat_id'];
        $des = @$row['des'];

        if (!$title || !$price || !$cat_id) {
            var_dump($title);
            var_dump($price);
            var_dump($cat_id);
            return ['success' => false, 'msg' => 'mei title price cat_id'];
        }

        if ($this->title_exesin($title)) {
            return ['success' => false, 'msg' => 'cun zai title'];
        }

        $r = $this->db->prepare('insert into product (title,cat_id,stock,des,price) values(:title,:cat_id,:stock,:des,:price)');

        $r->execute(['title' => $title, 'cat_id' => $cat_id, 'stock' => $stock, 'des' => $des, 'price' => $price]);

        return $r ? ['success' => true] : ['success' => false, 'msg' => 'meiadd'];

    }

    public function del($row)
    {
        $id = @$row['id'];
        if (!$id || !$this->find_id($id)) {
            return ['success' => false, 'msg' => 'mei zhe ge id'];
        }

        $r = $this->db->prepare('delete from product where id=:id');
        $r->execute(['id' => $id]);
        $r->fetch(PDO::FETCH_ASSOC);

        return $r ? ['success' => true, 'msg' => 'del OK~'] : ['success' => false, 'msg' => 'mei del'];

    }

    public function update($row)
    {
        $title = @$row['title'];
        $price = @$row['price'];
        $des = @$row['des'];
        $stock = @$row['stock'];
        $cover_src = @$row['cover_src'];
        $cat_id = @$row['cat_id'];
        $id = @$row['id'];
        if (!$id || !$this->find_id($id)) {
            return ['success' => false, 'msg' => 'mei zhe id'];
        }
        if (!$title || $this->title_exesin($title, $id)) {
            return ['success' => false, 'msg' => 'cun zai zhe title'];
        }

        $old = $this->db->prepare('select * from product where id=:id');
        $old->execute(['id' => $id]);
        $c = $old->fetch(PDO::FETCH_ASSOC);
        var_dump($c);
        // ['title' => $title, 'price' => $price, 'stock' => $stock, 'cat_id' => $cat_id, 'des' => $des, 'cover_src' => $cover_src]
        $m = array_merge($c, $row);
        var_dump($m);
        $r = $this->db->prepare("update product set title=:title,price=:price,stock=:stock,cat_id=:cat_id,des=:des,cover_src=:cover_src where id=:id");
        $r->execute($m);
    }

    public function read($row)
    {
        $page = @$_GET['page'] ?: 1;

        $limit = 10;

        $page = $page * ($limit - 1);

        $r = $this->db->prepare("select * from product order by id desc limit :page;");
        $r->execute(['page' => $page]);
        $data = $r->fetchAll(PDO::FETCH_ASSOC);
        return ['success' => true, 'data' => $data];
    }

    public function find_id($id)
    {
        $id = (int) $id;

        $r = $this->db->prepare('select * from product where id=:id');
        $c = $r->execute(['id' => $id]);
        return (bool) $r->fetch(PDO::FETCH_ASSOC);
    }

    public function title_exesin($title, $id = null)
    {
        $o = "select * from product where title=:title ";
        $t = (['title' => $title]);

        if ($id) {
            $o = "select * from product where title=:title and id<>:id ";
            $t['id'] = $id;
        }

        $r = $this->db->prepare($o);
        $r->execute($t);
        return (bool) $r->fetch(PDO::FETCH_ASSOC);
    }

}
