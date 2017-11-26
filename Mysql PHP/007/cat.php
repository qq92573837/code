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
        $title = $row['title'];

        $r = $this->db->prepare("insert into cat(title) values(:title)");

        $r->execute(['title' => $title]);
    }

    public function del($row)
    {
        $id = $row['id'];

        $r = $this->db->prepare("delete from cat where id=:id");

        $r->execute(['id' => $id]);

    }

    public function update($row)
    {
        $id = $row['id'];
        $title = @$row['title'];
        if (!$id || !$this->find($id)) {
            return ['success' => false, 'msg' => 'id存在'];
        }

        if (!$title || !$this->title_exist($title, $id)) {
            return ['success' => false, 'msg' => 'titlecunzai'];
        }

        $r = $this->db->prepare('select * from cat where id=:id');
        $r->execute(['id' => $id]);

        $o = $r->fetch(PDO::FETCH_ASSOC);
        $y = array_merge($o, $row);

        var_dump($y);
        $update = $this->db->prepare('update cat set title =:title  where id= :id');

        $update->execute($y);

    }

    public function read($row)
    {
        $page = @$_GET['page'] ?: 1;

        $limit = 10;

        $page = $page * ($limit - 1);

        $r = $this->db->prepare("select * from cat order by id desc limit :page;");
        $r->execute(['page' => $page]);
        $b = $r->fetchAll(PDO::FETCH_ASSOC);
        return ['success' => true, 'data' => $b];
    }

    //判断数据库中是否已经存在这个名字的title
    public function title_exist($title, $id = null)
    {
        $sql = "select * from cat where title = :title";
        $hole = ['title' => $title];

        if ($id) {
            $sql = $sql . ' and id <> :id';
            $hole['id'] = $id;
        }

        $sta = $this->db->prepare($sql);
        $sta->execute($hole);
        $str = $sta->fetch(PDO::FETCH_ASSOC);

        var_dump($str);
        return (bool) $str;
    }

    public function find($id)
    {
        $s = $this->db
            ->prepare('select * from cat where id = :id');
        $s->execute([
            'id' => $id,
        ]);
        return $s->fetch(PDO::FETCH_ASSOC);
    }

}
