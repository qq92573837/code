<?php




class Goods
{

    public $goods_id;

    public $goods_list;

    
    public function __construct()
    {

        $this->goods_list=$this->read();

        $param = array_merge($_GET, $_POST);
        $action = @$param['action'];
        if ($action) {
            $this->$action();
        }
    }
    public function add()
    {
    
        $title=$_POST['title'];
        $price=$_POST['price'];
       
        $avatar=$_FILES['avatar']['tmp_name'];
       
       
        $url='./img/'.rand(100, 999).'.jpg';
        move_uploaded_file($avatar, $url);
        if (!$title||!$price) {
            return ['success'=>false,'msg'=>'没有title'];
        }if ($title || $price) {
        }
            $this->goods_list[]=[
            'id'=>$this->inc(),
            'title'=>$title,
            'price'=>$price,
            'avatar'=>$url,
            ];
        
            $this->sync();
            echo  '添加成功';
            header("Refresh:1;url=/index.php");
            return ['success'=>true];
            
    }

    public function read()
    {
        $json=file_get_contents('D:/2017.11/php/015/goods.json');
        $id=file_get_contents('D:/2017.11/php/015/id.json', json_encode($this));

        $this->goods_list= json_decode($json, true);
        $this->goods_id=json_decode($id);
        return $this->goods_list;
    }

    public function sync()
    {
        file_put_contents('./goods.json', json_encode($this->goods_list));
    }

    public function inc()
    {
        $this->goods_id++;
        file_put_contents('./id.json', json_encode($this->goods_id));
        return $this->goods_id;
    }

    public function del()
    {
        $id=$_GET['id'];
        $index=$this->find_index($id);
        array_splice($this->goods_list, $index, 1 );
        $this->sync();
        echo  '删除成功';
        header("Refresh:1;url=/index.php");
    
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

$goods =new Goods();
