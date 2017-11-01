;
(function () {
        'use strict';

        function render() {
            article_list = b.read()
                            //迭代                                                    
            article_list.array.forEach(function (article){
                    var el_article = document.createElement('div')
                    el_article.innerHTML = `
                    
                    <h2>${article.title}</h2>
                    
                    
                    
                    
                    `
                })

   }




         
















        })();