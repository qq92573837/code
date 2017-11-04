; (function () {
    'use strict';


    window.Event = new Vue();//传话的


    Vue.component('page-product', {
        template: '#tpl-page-product',
        mounted: function () {
            var me = this;
            Event.$on('product_add_or_update.success', function () {
                me.form_product = {};//  触发 然后执行
            })
        },
        methods: {
            trigger: function (name, data) {
                Event.$emit(name, data)
            },//触发 然后执行
        },
        data: function () {
            return {
                form_product: {},
            }
        }
    });//创建商品管理
    
    Vue.component('page-cat', {
        template: '#tpl-page-cat',
    });//创建分类

    new Vue({
        el: '#app',
        mounted: function () {
            this.product_list = s.get('product_list') || [];
            this.last_product_id = s.get('list_product_id') || 0;

            var me = this;
            Event.$on('product_add_or_update', function (data) {
                me.product_add_or_update(data)
            });//监听  data是输入框的内容


        },//最先执行 相当于初始化
        data: {
            product_list: [],
            last_product_id: 0,
        },
        methods: {
            product_add_or_update: function (product) {
                if (!product || !product.title || product.price)

                    product.id = this.product_inc()
                this.product_list.push(product)
                this.sync();
                Event.$emit('product_add_or_update.success')//清空 传到上面清空

            },
            sync: function () {
                s.set('product_list', this.product_list)
            },
            product_inc: function () {
                this.last_product_id++;
                s.set('last_product_id', this.last_product_id)
                return this.last_product_id;
            }

        },
    })
























})();
