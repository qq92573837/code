<?php



class Product
{

    public $params;//用来存放所有传参

    public $product_list;//存放所有产品


    public $file_path='/product.json';//定义一个变量来代替文件路径

    public function __construct() 
    {
        $this ->product_list=  $this->read();//或者所有数据 存入product_list

        $this->params = array_merge($_GET, $_POST);//把所有传参 合并成为一个数组 传给params


       
        $action = $this->params['action'];//动态的 获取到对应的方法
        $result = $this->$action();  //然后对应的方法 add(),del(),update(),read()
        
        echo $this->json($result);//方法执行过后 返回的结果 然后在页面上显示
    }

    public function add()
    {
        $title=$this->params['title'];
        $price=$this->params['price'];
    
         echo 'dddd';
        if (!$title||!$price) {
            return ['success'=>false,'msg'=>'错误 没有title或者price'];
        }
            $this-> product_list[]=[
             'title'=> $title,//如果没有title
            'price'=> $price,//如果没有price
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



    public function update()
    {
        $params=$this->params;
        $index=$params['id'];

        $product=$this->product_list[$index];

        $this->product_list[$index]=
        array_merge($product, [
            'title'=>$params['title'],
            'price'=>$params['price'],
        ]);

        $this->sync();
        return ['success'=>true];
    }

    public function read()
    {
        $json= file_get_contents('product.json', json_encode($this->product_list));
        return json_decode($json, true);//转换成json格式 转换成php可以理解的 加true为数组 不加为对象
    }

    public function json($data)
    {
        header('Conten-Type:applicetion/json');
        return json_encode($data);
    }
    public function sync()
    {
        file_put_contents('product.json', json_encode($this->product_list));
    }
}

$product =new Product();
