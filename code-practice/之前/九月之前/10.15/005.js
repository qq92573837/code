;(function() {



    var  task_list, last_id;
    init_data();


    //获取数据
function init_data (){
     task_list = s.get('task_list');
     last_id= s.get('task_id')


    //判断 
    if(!tack_list){
        tack_list=[];
        s.set('tasl_list',task_list)
    }


}















})()