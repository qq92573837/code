; (function () {
    'use strict';



function render () {
    el_article_list.innerHTML = '';
    article_list = b.read();
    var  el_article = document.createElement('div');
    el_article.innerHTML = `
    <h2>${article.title}id:${article.id}</h2>
   < button data-id = '${article.id}' id= 'btn-btn-remove-${article.id}'></button>
    `;
    
    el_article_list.appendChild(el_article)
}





























})();