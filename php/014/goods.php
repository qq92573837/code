<?php


class goods
{

    public $goods_id;

    public $goods_list;

    public function __construct()
    {
        $this->goods_list=$this->read();
        $action = @$_POST['action'];
        if ($action)
          $this->$action();
    }


    public function add()
    {
        $title=@$_POST['title'];
        $price=@$_POST['price'];
        $avatar=$_FILES['avatar']['tmp_name'];

    
        $url='./img/'.rand(1000, 9999).'.jpg';
        move_uploaded_file($avatar, $url);

        if (!$title||!$price) {
            return ['success'=>false,'msg'=>'没填title,或者price'];
        }                                                    

        $this->goods_list[]=[
        'id'=>$this->inc(),
        'title'=>$title,
        'price'=>$price,
        'avatar'=>$url,
        ];

        $this->sync();
        return ['success'=>true];
    }

    public function read()
    {
        $json=file_get_contents('D:/2017.11/php/014/good.json');
    
        $this->goods_list=json_decode($json, true);
        $this->goods_id=json_decode(file_get_contents('D:/2017.11/php/014/id.json'));
        return $this->goods_list;
    }
    public function sync()
    {

        file_put_contents('./good.json', json_encode($this->goods_list));
    }

    public function inc()
    {
        $this->goods_id++;
        file_put_contents('./id.json', json_encode($this->goods_id));
        return  $this->goods_id;
    }
}

$goods= new  goods();


