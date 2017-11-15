<?php

class Product
{

    public $params;//存放所有的传参

    public $product_list;

    public $file_path='./product.json';

    public function __construct()
    {
        $this->product_list=$this->read();
        $this->params=array_merge($_GET, $_POST);
         
        $action =$this->params['action'];
        $result =$this->$action();
        
        
        echo $this->json($result);
    }


    public function add()
    {
        $title=$this->params['title'];
        $price=$this->params['price'];
        if (!$title||!$price) {
            return['success'=>false, 'msg'=>'错误'];
        }

        $this->product_list[]=[
            'title'=>$title,
            'price'=>$price,
        ];
        $this->sync();
        return ['success'=>true];
    }

    public function del()
    {
        $index=$this->params['id'];
        
        unset($this->product_list[$index]);
        $this->sync();
        return ['success'=>true];
    }

    public function undate()
    {
        $params =$this->params;
        $index= $params['id'];

        $product=$this->product_list[$index];

        $this->product_list[$index]=
        array_merge($product, [
            'title'=>$params['title'],
            'price'=>$params['price'],
        ]);
        $this->sync();
        return['cuccess'=>true];
    }

    public function read()
    {
        $json=file_get_contents($this->file_path);
        return json_decode($json, true);
    }


    public function sync()
    {
        file_put_contents($this->file_path, json_encode($this->product_list));
    }


    public function json($data)
    {
        header('Content-Type:application/json');
        return json_encode($data);
    }
}

$product =new   Product();
