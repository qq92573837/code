<?php

// function name($age)
// {
//     echo '你几岁' . $age; // 在PHP中，点(.)用于连接字符串
// };
// name('13');
// $a = 1;
// function increment(&$number) {
//   /* 传进来的值都会加一 */
//   $number = $number; 
// }

// increment($a);
// echo($a);


// $a=['a','b','c'];
// array_push($a, '111');

// foreach ($a as $itme) {
//     var_dump($itme);
// };

// for ($i= 0; $i<count($a); $i++) {
//     var_dump($a[$i]);
// };


// $a=0;

// while ($a<10) {
//     $a=$a+1;
//     var_dump($a);
// };



// for ($i=1; $i<=9; $i++) {
//     for ($j=1; $j<=$i; $j++) {
//         echo '$j*$i=' .($j*$i);
//         echo('');
//     };
//     echo('<br>');
// }


// function show()
// {
//     static $num;
//     $num++;
//     echo '第{$num}次被调用';
// }

// show();


// class Person
// {
//     public $name='whh';
//     public $age = '20';


//     public function yo1()
//     {
//         echo 'yo';
//     }

//     public function yo2()
//     {
//         $this->name;//this 即将生成的对象
//         $this->yo1();
//     }
// };

// $whh= new Person();
// var_dump($whh);




// echo date("Y/m/d") . "<br>";
// echo date("Y.m.d") . "<br>";
// echo date("Y-m-d");
class Person
{
    
    public $params;//用于存放请求传参

    public $product_list;//用于存放产品数据

    public $file_path='product.json';//用于设置存放的文件路径

    public function __construct()// 相当于初始化 每次都会自动触发
    {

    
        $this->product_list =$this->read();//将所有的数据存入product_list


        $this->params = array_merge($_GET, $_POST);//将所有的产品数据存入$params属性中

        $action= $this->params['action'];

        if ($action =='add') {
            $this->$add();
        } elseif ($action=='del') {
            $this->$del();
        } elseif ($action=='update') {
            $this->update();
        } elseif ($action =='read') {
            $this->read();
        };

        echo $this->json($result);//向客户端返回对象的方法
    }


    
    public function add()
    {
        
        $title=$this->params['title'];//获取 title 必须的传参
        $price=$this->params['peice'];//获取 peice 必须的传参

        if (!$title||$price) {//如果不存在
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

        return json_decode($json, true);
    }


    public function sync()
    {
        file_put_contents($this->file_path, json_encode($this->product_list));
    }

    public function json()
    {
        header('Content-Type:applicetion/json');
        return json_encode($data);
    }
}


$product =new Person();
?>
<a href="./in.php">dddd</a>