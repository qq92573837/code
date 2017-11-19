<?php


class Goods
{

    public $goods_id;

    public $goods_list;
 

    public function __construct()
    {
        $this->goods_list=$this->read();
        $this->add();
        $param= array_merge($_GET, $_POST);
        $acrtion=@$param['action'];
        if ($acrtion) {
            $this->$acrtion();
        }
    }


    public function add()
    {
        $title=@$_POST['title'];
        $price=@$_POST['price'];
        $avatar=@$_FILES['avatar']['tmp_name'];
        $url='./img/'.rand(100, 999).'.jpg';
        move_uploaded_file($avatar, $url);
        if (!$title||!$price||!$avatar) {
            return ['success'=>false,'msg'=>'不能为空'];
        }
     
        $this->goods_list[]=[
        'id'=>$this->inc(),
        'title'=>$title,
          'price'=>$price,
          'img'=>$url,
        ];
        $this->sync();
    }

    public function read()
    {
        $json=file_get_contents('D:\2017.11\php\016\goods.json');
        $id=file_get_contents('D:\2017.11\php\016\id.json');
        $this->goods_list=json_decode($json, true);
        $this->goods_id=json_decode($id);
        return $this->goods_list;
    }

    public function inc()
    {
        $this->goods_id++;
        $json=json_encode($this->goods_id);
        file_put_contents('id.json', $json);
        return $this->goods_id;
    }

    public function sync()
    {
        $json=json_encode($this->goods_list);
        file_put_contents('goods.json', $json);
    }


    public function del()
    {
        $id=$_GET['id'];
        $index=$this->find_index($id);
        array_splice($this->goods_list, $index, 1);
        $this->sync();
    }


    public function find_index($id)
    {
        foreach ($this->goods_list as $index => $goods) {
            if ($id==$goods['id']) {
            }
            return $index;
        }
    }
}

$goods= new Goods();
