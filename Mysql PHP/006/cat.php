<?php

class Cat
{

    public $db;

    public function __construct($db)
    {

        $this->db = $db;
    }

    public function add($row)
    {
        $title = @$row['title'];

        if (!$title) {
            return ['success' => false, 'msg' => '没填内容'];
        }
        $sql = $this->db->prepare("insert into cat (title) values('{$title}')");

        $r = $sql->execute();

        return $r ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];

    }

    public function del($row)
    {
        $id = @$row['id'];
        if (!$id) {

            return ['success' => false, 'msg' => '没id'];
        }
        $sql = $this->db->prepare('delete from cat where id =:id');

        $r = $sql->execute(['id' => $id]);

        return $r ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];

    }

    public function update($row)
    {
        $id = (int) @$row['id'];

        $sql = $this->db->prepare('select * from cat where id=:id');

        $sql->execute(['id' => $id]);

        $old = $sql->fetch(PDO::FETCH_ASSOC);

        $m = array_merge($old, $row);
        

        $r = $this->db->prepare('update cat set title=:title where id=:id');

        $r->execute($m);

        return $r ? ['success' => true] : ['success' => false, 'msg' => '没插入成功'];

    }

    public function read($row)
    {

        $page = $_GET['page'] ?: 1;

        $limit = 4;

        $pages = $page * ($page - 1);

        $sql = $this->db->prepare('select * from cat order by id desc limit :pages, :limit;');
        $sql->execute(['pages' => $pages, 'limit' => $limit]);

        $r = $sql->fetchAll(PDO::FETCH_ASSOC);

        return $r;
    }

}
