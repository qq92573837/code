<?php

class goods
{
    public $params;

    public $goods_list;

    public $goods_id;

    public function __construct()
    {
        $this->goods_list=$this->read()?:[];

        $this->params=array_merge($_GET, $_POST);

        $artion =$this->params['artion'];
    
        $result =$this->$artion();

        echo $this->json($result);
    }


    public function add()
    {
        $title= $this->params['title'];
        $price=$this->params['price'];
        $goods_id=$this->params['goods_id'];


        if (!$title||!$price) {
            return ['success'=>false,'msg'=>'没title||price'];
        }

        $this->goods_list[]=[
            'title'=>$title,
            'price'=>$price,
        ];
        $this->sync();
        return['success'=>true ];
    }

    public function del()
    {
        $id=$this->$params['id'];

        unset($this->$goods_list[$id]);

        $this->sync();
        return ['success'=>true];
    }
    public function update()
    {
        
        $id= $this->$params['id'];


    
        $goods_list[$index]=[$goods_list[$id],
        array_merge([
        'title'=>$params['title'],
        'price'=>$params['price'],
        ])
        ];
    }


    public function read()
    {
        $json = file_get_contents('json.json');
        return json_decode($json, true);
    }

    public function inc()
    {
        $goods_id++;
        file_put_contents('json.json', json_encode($this->goods_id));
    }



    public function sync()
    {
        file_put_contents('json.json', json_encode($this->goods_list));
    }


    public function json($data)
    {
        header('Content-Type:application/json');
        return json_encode($data);
    }
}



$goods= new goods();
