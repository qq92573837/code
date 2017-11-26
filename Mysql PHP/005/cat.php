<?php

class Cat
{
    public $param;
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

        $param = array_merge($_GET, $_POST);
        $action = @$param['action'];
        if ($action) {
            $this->$action();
        }

    }

    public function add()
    {
        $shouji = $_POST['shouji'];

        if (!$shouji) {
            return ['success' => false, 'msg' => '没手机'];
        }
        $r = $this->db->prepare("insert into cat(title) values('{$shouji}')");
        $r->execute();
        header("Refresh:1;url=/index.php");
        var_dump($r ? ['success' => true] : ['success' => false, 'msg' => '没插入成功']);
        
    }

    public function del()
    {
        $id = $_GET['id'];
        var_dump($id);
        $r = $this->db->prepare("delete from cat where id=:id")->execute(['id' => $id]);
        header("Refresh:1;url=/index.php");

    }
    public function update()
    {

    }

    public function read()
    {

    }

    public function new_read()
    {
        $b = $this->db->prepare('select * from cat order by id asc   ');

        $b->execute();

        return $b->fetchAll(PDO::FETCH_ASSOC);
    }

}
$cat = new Cat();
