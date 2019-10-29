<template>
    <div class="header" :class="{some:isCollapse}">
        <span v-if="!username" class="dol"><span>您还没有登录，请</span> <router-link to="/login" style="color:#8cc5ff; cursor:pointer;">注册/登录</router-link></span>
        <span v-else class="dol">您好，{{username}} <a @click="loginOut()" style="color:#8cc5ff; cursor:pointer;">退出登录</a></span>
        <span class="date">现在时间：{{date | formatDate}}</span>
    </div>
</template>
<script>
    const padDate = function (value) {
    return value < 10 ? `0${value}` : value;
    };
    export default {
        data() {
            return {
                username: sessionStorage.username,
                date: new Date()
            };
        },
        props: {
            isCollapse: Boolean,
            require: true
        },
        methods: {
            loginOut() {
                sessionStorage.removeItem('username');
                this.$router.push('login');
            }
        },
        filters: {
            formatDate: function (value) {
                const date = new Date(value);
                const year = date.getFullYear();
                const month = padDate(date.getMonth() + 1);
                const day = padDate(date.getDay());
                const hours = padDate(date.getHours());
                const minutes = padDate(date.getMinutes());
                const seconds = padDate(date.getSeconds());
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                // return 1;
            }
        },
        mounted() {
            const _this = this;
            this.timer = setInterval(function () {
            _this.date = new Date();
            }, 1000);
            //array.filter()用法。
            // const arr = [1, 2, 3, 4, 5];
            //     console.log(arr.filter(function (age) {
            //         return age > 1;
            //     }));
            //     console.log(arr);
        },
        beforeDestroy() {
            if (this.timer) {
            clearInterval(this.timer);
            }
        }
    };
</script>
<style lang="scss" scoped>
    .dol {
        float: right;
        margin-right: 20px;
    }

    .date {
        float: right;
        width: 16%;
        min-width: 230px;
    }
</style>

