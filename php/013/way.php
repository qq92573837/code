<?php

session_start();

class Goods
{
    
    public $parms;

    public $goods_list;

    public $goods_id;

    public function __construct()
    {

       
        $this->goods_list=$this->read();
        $this->goods_list=$this->read($this->goods_id)?:0;
        $this->goods_id=$this->inc();

        $this->parms=array_merge($_GET, $_POST);
        $this->add();
    }

    // array(5) { ["name"]=> string(9)
    //      "80x20.png" ["type"]=> string(9)
    //      "image/png" ["tmp_name"]=> string(24)
    //      "C:\xampp\tmp\php270B.tmp" ["error"]=> int(0)
    //      ["size"]=> int(237) }

    public function add()
    {
        $name=$this->parms['name'];
        $price=$this->parms['price'];
        $img=$_FILES['avatar']['tmp_name'];
        $url='./img/'.rand(1000, 9999).'.jpg';
           move_uploaded_file($img, $url);



        if (!$name||!$price) {
            return ['success'=>false,'msg'=>'没有标题或者没有价格'];
        }
        $this->goods_list[]=[
        'id'=>$this->inc(),
        'name'=>$name,
        'price'=>$price,
        'img'=>$url,
        ];

        $this->sync();
        echo '添加成功';
        header("Refresh:1;url=/manage.php");
    }

    public function read()
    {
        $this->goods_id=file_get_contents('id.json', json_encode($this->goods_id));
        $json= file_get_contents('json.json', json_encode($this->goods_list));
        return json_decode($json, true);
    }


    public function inc()
    {
        $this->goods_id++;
        file_put_contents('id.json', json_encode($this->goods_id));
        return $this->goods_id;
    }
    public function sync()
    {
        file_put_contents('json.json', json_encode($this->goods_list));
    }

    public function json($data)
    {

        header('Content-Type:application/json');
        return  json_encode($data);
    }
}

$goods = new Goods();
