<?php


class Goods
{


    public $paroduct ;

    public $goods_list;

    public function __construct()
    {
        $this->goods_list =$this->read();

        $this->paroduct=array_merge($_GET, $_POST);

        $artion=$this->paroduct['artion'];
        $result=$this->$artion();

        echo $this->json($result);
    }

    public function add()
    {
        $title=$this->paroduct['title'];
        $price=$this->paroduct['price'];
        
       
        if (!$title||!$price) {
            return ['success'=>false,'msg'=>'每天title'];
        }
            $this->goods_list[]=[
                'title'=>$title,
                'price'=>$price,
             
            ];
            var_dump($goods_list);
         
        
        $this->sync();
        return ['success'=>true];
    }


    public function read()
    {
      /*从文件取到json*/
        $json = file_get_contents('json.json');
  
      /*返回解码过的json，即数组*/
        return json_decode($json, true);
    }
  
    public function sync()
    {
        file_get_contents('json.json', json_encode($this->goods_list));
    }

    public function json($data)
    {
        header('Content-Type:application/json');
        return  json_encode($data);
    }
}


$goods = new Goods();
