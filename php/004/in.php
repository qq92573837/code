<?php

class Person
{
    public $params;//用于存放请求传参

    public $product_list;//用于存放产品数据

    public $file_path='product.json';//用于设置存放的文件路径
    // 相当于初始化 每次都会自动触发
    public function __construct(){
    
        $this->product_list =$this->read();//将所有的数据存入product_list


        $this->params = array_merge($_GET, $_POST);//将所有的产品数据存入$params属性中

        $action= $this->params['action'];

        if ($action =='add') {
            $result=$this->add();
        } elseif ($action=='del') {
            $result=$this->del();
        } elseif ($action=='update') {
            $result=$this->update();
        } elseif ($action =='read') {
            $result=$this->read();
        };

        echo $this->json($result);//向客户端返回对象的方法
    }


    
    public function add()
    {
        
        $title=$this->params['title'];//获取 title 必须的传参
        $price=$this->params['price'];//获取 peice 必须的传参

        if (!$title||!$price) {//如果不存在
            return ['success'=>false,'msg'=>'没有title,或者没有peice'];
        } else {
            (
            $this->product_list[]=[//将新的数据推到产品列表中
            'title'=>$title,
            'price'=>$price,
            ]);
        }
            $this->sync();
            return ['success'=>true];
    }



    public function del()
    {
        $index =$this->params[id];//先确定删除那一条
        unset($this->product_list[index]);//删除产品列表中的数据

        $this->sync();
        return ['success'=>true];
    }


    public function update()
    {
        $params=$this->params;// 先确定要更新那一条
        $index=$params['id'];
   
        $product =$this->product_list[index];//取到旧的值


        $this->product_list[$index] =array_merge($product,
        ['title'=>$params['title'],
        ['parce'=>$parce['parce'],
        ]
        ]);
        $this->sync();
        return ['success'=>true];
    }

    public function read()
    {
        $json=file_get_contents($this->file_path);
        echo $json;
        // return json_decode($json, true);
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

$p = new Person();

$product =new Person();
