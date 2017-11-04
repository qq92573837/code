; (function () {
    'use strict';
    var Event = new Vue();
    Vue.component("cat-select", {
        props: ["message"],
        template: `
            <span>商品分类：
            <select v-model="message.catId" required>
            <option value="0" >顶级分类</option>
            <option v-for="cat in catList" v-bind:value="cat.id">{{cat.title}}</option>
            </select>
            </span>
            `,
        data: function () {
            return {
                currentCat: {
                    parentId: 0
                },
                catList: [],
            }
        },
        mounted: function () {
            this.catList = S.get("catList") || [];
        },
    })
    new Vue({
        el: "#app",
        data: {
            productList: [],
            lastProductId: 0,
            currentPage: "admin-product",
            currentProduct: { catId: 0 },
        },
        mounted: function () {
            this.productList = S.get("productList") || [];
            this.lastProductId = S.get("lastProductId") || 0;
        },
        methods: {
            addProduct: function () {
                if (!this.currentProduct.title || !this.currentProduct.price) {
                    throw "内容禁止为空"
                }
                if (this.currentProduct.id) {
                    var index = this.findProductIndex(this.currentProduct.id);
                    if (index !== -1) {
                        this.productList[index] = Object.assign({}, this.currentProduct);
                    } else {
                        throw "要修改的数据不存在";
                    }
                } else {
                    this.currentProduct.id = this.inc();
                    this.productList.push(this.currentProduct);
                }
                this.currentProduct = { catId: 0 };
            },
            update: function (product) {
                this.currentProduct = product;
            },
            remove: function (productId) {
                var index = this.findProductIndex(productId);
                if (index !== -1) {
                    this.productList.splice(index, 1);
                }
            },
            findProductIndex: function (productId) {
                return this.productList.findIndex(function (product) {
                    return product.id === productId;
                });
            },
            inc() {
                this.lastProductId++;
                S.set("lastProductId", this.lastProductId);
                return this.lastProductId;
            },
            sync() {
                S.set("productList", this.productList);
            }
        },
        watch: {
            productList: {
                deep: true,
                handler: function () {
                    this.sync();
                }
            }
        }
    });
})();