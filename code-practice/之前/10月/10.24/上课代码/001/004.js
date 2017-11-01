; (function () {
    'use strict';







    ;(function () {
        'use strict';
        /*首先选中页面中所有的链接*/
        var link_list = document.querySelectorAll('[data-link]');
        var current_page;
      
        init();
      
        function init() {
          /*如果用户是第一次打开，默认页为首页*/
          current_page = s.get('current_page') || 'home';
          /*初始渲染*/
          render_page(current_page);
      
          /*给所有的链接绑定点击事件*/
          link_list.forEach(function (link) {
            /*当任何一条链接被点击的时候*/
            link.addEventListener('click', function () {
              /*获取这个链接地址*/
              var page = link.dataset.link;
              /*将地址存到冰箱里*/
              s.set('current_page', page);
              /*因为当前页已经变化，所以要再次渲染页面*/
              render_page(page);
            })
          });
        }
      
        /*
        * 渲染页面
        * @param string 想渲染哪一页
        * */
        function render_page(page_name) {
          /*选中页面中所有的"页面div"*/
          var all_page = document.querySelectorAll('[data-page]');
          /*迭代所有的页面div*/
          all_page.forEach(function (page_div) {
            /*先简单粗暴的将所有的div隐藏*/
            page_div.hidden = true;
            /*然后只显示与传参相对应的页面*/
            if (page_div.dataset.page == page_name) {
              page_div.hidden = false;
            }
          });
        }
      })();

























})();