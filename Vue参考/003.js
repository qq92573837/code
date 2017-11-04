; (function () {
    'use strict';
    Vue.component("cat-input-forma", {
        template: `
        <div>
        <form @submit.prevent="addCat()">
            <input type="hidden" v-model="currentCat.id">
            添加分类：<input type="text" v-model="currentCat.title" required><br>
            父级分类：<select v-model="currentCat.parentId"  required>
            <option value="0" selected>顶级分类</option>
            <option v-for="cat in catList" v-bind:value="cat.id">{{cat.title}}</option>
            </select>
            <button type="submit">提交</button>
        </form>
        <div class="cat-list">
        <table border="1">
            <thead>
                <tr>
                    <th>分类ID</th>
                    <th>分类名称</th>
                    <th>父ID</th>
                    <th>分类操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in catList">
                    <td>{{cat.id}}</td>
                    <td>{{cat.title}}</td>
                    <td>{{cat.parentId}}</td>
                    <td>
                        <button @click="update(cat)">更新</button>
                        <button @click="remove(cat.id)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        `,
        data: function () {
            return {
                currentCat: {
                    parentId: 0
                },
                catList: [],
                catLastId: 0,
            }
        },
        mounted: function () {
            this.catList = S.get("catList") || [];
            this.catLastId = S.get("catLastId") || 0;
        },
        methods: {
            addCat: function () {
                if (!this.currentCat.title) {
                    throw "内容禁止为空"
                }
                if (this.currentCat.id) {
                    var index = this.findCatIndex(this.currentCat.id);
                    if (index !== -1) {
                        this.catList[index] = Object.assign({}, this.currentCat);
                    } else {
                        throw "要修改的数据不存在";
                    }
                } else {
                    this.currentCat.id = this.inc();
                    this.catList.push(Object.assign({}, this.currentCat));
                }
                this.currentCat = { parentId: 0 };
            },
            update: function (cat) {
                this.currentCat = cat;
            },
            remove: function (catId) {
                var index = this.findCatIndex(catId);
                if (index !== -1) {
                    this.catList.splice(index, 1);
                }
            },
            findCatIndex: function (catId) {
                return this.catList.findIndex(function (cat) {
                    return cat.id === catId;
                });
            },
            sync() {
                S.set("catList", this.catList);
            },
            inc() {
                this.catLastId++;
                S.set("catLastId", this.catLastId);
                return this.catLastId;
            }
        },
        watch: {
            catList: {
                deep: true,
                handler: function () {
                    this.sync();
                }
            }
        }
    });
    new Vue({
        el: "#cat-app",
    });
})();