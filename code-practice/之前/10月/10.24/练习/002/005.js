var article_list;

var el_article_form = document.querySelector('#article-form');
var el_article_list = document.querySelector('#article-list')

init()


function init() {
    render();

}

function get_form_data(farm) {

    var input_list = el_article_form.querySelector('[name]');
    var data = {}
    for (var i = 0; i < input_list.length; i++) {
        var input = input_list[i]
        var key = input.name;
        var val = value;
        data[key] = val;

    }
    return data;
    console.log(data)
}








function render() {
    el_article_list.innerHTML = '',

        article_list = b.read();


    article_list.forEach(function (article) {
        var el_article = document.createElement('div');

        el_article.innerHTML = `
                        <h2> 标题:${article.name}
                         作者:${article.price} 
                         内容:${article.referral}
                         编号:${article.id}</h2> 
                         <div>
                         <button data-id='${article.id}' id='btn-remove${article.id}'>删除</button>
                         <button data-id='${article.id}' id ='btn-update${article.id}'>更新</button>
                            </div>
                         `;


        var btn_update = el_article.querySelector('#btn-update' + article.id);
        btn_update.addEventListener('click', function () {
            var id = parseInt(btn_update.dataset.id)


        })



        var btn_remove = el_article.querySelector('#btn-remove' + article.id);
        btn_remove.addEventListener('click', function () {
            var id = parseInt(btn_remove.dataset.id)
            b.remove(id)
            render()
        })


        el_article_list.appendChild(el_article)

    })
}