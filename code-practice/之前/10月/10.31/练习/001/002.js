;
(function () {
    'use strict';



    new Ven({
        el: '#app',
        data: {
            new_list = [],
            user_list = []

        },
        methods:{
            add_user:function(){
                
            },


            remove:function(index){
            this.user_list.splice(index,1)
            }



        }

    })





























})();