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

        props: ['list', 'catlist',],

        methods: {
            trigger: function (name, data) {
                Event.$emit(name, data);
            },//触发 然后执行
            product_copy: function (product) {
                return Object.assign({}, product);
            }
        },
        data: function () {
            return {
                form_product: {
                    tltle: '',
                },
            }
        },
    });//创建商品管理



    //创建分类管理
    Vue.component('page-cat', {
        template: '#tpl-page-cat',
        mounted: function () {
            var me = this;
            Event.$on('cat_add_or_update.success', function () {
                me.form_cat = {
                    parent_id: 0,
                };//  触发 然后执行
            })
            Event.$on('update_data', function (data) {
                me.form_cat = data;
            })
        },


        props: ['list',],
        methods: {
            trigger: function (name, data) {
                Event.$emit(name, data)
            },//触发 然后执行

            cat_copy: function (p) {

                return Object.assign({}, p);
            },
        },
        data: function () {
            return {
                form_cat: {
                    parent_id: 0,
                },
            }
        }
    });//创建分类管理




    // Vue.component('page-cat', {
    //     template: '#tpl-page-cat',
    // });//创建分类

    new Vue({
        el: '#app',
        mounted: function () {
            this.product_list = s.get('product_list') || [];
            this.last_product_id = s.get('list_product_id') || 0;
            this.cat_list = s.get('cat_list') || [];
            this.last_cat_id = s.get('list_cat_id') || 0;



            var me = this;
            Event.$on('product_add_or_update', function (data) {
                console.log(data);
                me.product_add_or_update(data);
            });//监听  data是输入框的内容

            Event.$on('product_del', function (data) {
                var confirmed = confirm('确定删除吗?');
                if (!confirmed)
                    return  //
                me.product_del(data)
            });


            Event.$on('cat_add_or_update', function (data) {
                me.cat_add_or_update(data)
            });//监听  data是输入框的内容

            Event.$on('cat_del', function (data) {
                var confirmed = confirm('确定删除吗?');
                if (!confirmed)
                    return  //
                me.cat_del(data)
            });


        },//最先执行 相当于初始化
        data: {
            product_list: [],
            last_product_id: 0,
            cat_list: [],
            last_cat_id: 0,
        },
        methods: {
            product_add_or_update: function (product) {
                if (!product || !product.title || !product.price)
                    throw '没填'

                if (product.id) {
                    var index = this.product_find_index(product);
                    if (index === -1) {
                        throw '产品不存在';
                    }
                    this.product_list[index] = Object.assign({}, this.product_list[index], product)

                } else {
                    product.id = this.product_inc()
                    this.product_list.push(product)
                }


                this.product_sync();
                Event.$emit('product_add_or_update.success')//清空 传到上面清空
            },


            //分类---------------------------------------------------
            cat_add_or_update: function (cat) {
                if (!cat || !cat.title)
                    throw '没填'


                if (!cat.parent_id) {
                    cat.parent_id = 0;
                }


                if (cat.id) {
                    var index = this.cat_find_index(cat);
                    if (index !== -1)
                        this.cat_list[index] = Object.assign({}, this.cat_list[index], cat)

                } else {
                    cat.id = this.cat_inc()
                    this.cat_list.push(cat)
                }


                this.cat_sync();
                Event.$emit('cat_add_or_update.success')//清空 传到上面清空
            },
            //分类结束------------------------------------------------------



            //---------------------------商品管理--------------------
            product_find_index: function (data) {
                return this.product_list.findIndex(function (product) {
                    return product.id == data.id;

                })
            },

            product_del: function (data) {
                var index = this.product_find_index(data)

                if (index === -1)
                    throw '没找到id'
                this.product_list.splice(index, 1)
                this.product_sync()
            },


            product_inc: function () {
                this.last_product_id++;
                s.set('last_product_id', this.last_product_id)
                return this.last_product_id;
            },
            product_sync: function () {
                s.set('product_list', this.product_list)
            },




            //----------商品管结束


            //分类



            cat_find_index: function (data) {

                return this.cat_list.findIndex(function (cat) {
                    return cat.id === data.id;

                })
            },

            cat_del: function (data) {
                var index = this.cat_find_index(data)

                if (index === -1)
                    throw '没找到id'
                this.cat_list.splice(index, 1)
                this.cat_sync()
            },

            cat_update: function (data) {
                Event.$emit('update_data', data)
            },

            cat_sync: function () {
                s.set('cat_list', this.cat_list)
            },
            cat_inc: function () {
                this.last_cat_id++;
                s.set('last_cat_id', this.last_cat_id)
                return this.last_cat_id;
            },

        },
    })
























})();
