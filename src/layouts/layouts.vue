<template>
    <div class="container">
        <div class="cell" :class="{some:isCollapse}"  @click="isCollapse = !isCollapse">
        </div>
        <Headers :isCollapse="isCollapse"></Headers>
        <div class="aside" :class="{some:isCollapse}">
            <Aside  :isCollapse="isCollapse"></Aside>
        </div>
        <div class="content" :class="{some:isCollapse}" v-if="username">
            <router-view/>
        </div>
        <div class="content nolo" :class="{some:isCollapse}" v-else>无登录用户数据</div>
    </div>
</template>

<script>
    import Aside from '@/components/common/aside';
    import Headers from '@/components/common/header';

    export default {
        name: 'layouts',
        components: {Aside, Headers},
        data() {
            return {
                isCollapse: false,
                username: sessionStorage.username
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    $header-top: 44px;
    $aside-left: 220px;

    .container {
        width: 100%;
        height: 100%;
        position: relative;
        .cell {
            position: absolute;
            left: 230px;
            top: 6px;
            width: 30px;
            height: 30px;
            z-index: 10;
            // border: 1px solid #fff;
            // border-radius: 100px;
            background: url("~@/assets/images/open.png");
            background-size: 100%;
            cursor: pointer;
            i {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
            }
            &.some {
                left: 74px;
                transform: rotate(180deg);
            }
        }
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: calc(100% - 220px);
        height: $header-top;
        background-color: #595959;
        line-height: $header-top;
        color: #fff;
        font-size: 14px;
        margin-left: $aside-left;
        min-width: 500px;
        &.some {
            width: calc(100% - 64px);
            margin-left: 64px;
        }
    }

    .header a {
        float: right;
    }

    .aside {
        position: fixed;
        top: 0;
        left: 0;
        width: $aside-left;
        height: 100%;
        box-sizing: border-box;
        background-color: #595959;
        overflow-x: hidden;
        overflow-y: auto;
        color: #fff;
        z-index: 9999999;
        &.some {
            width: 64px;
        }
    }

    .content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: $header-top+10px 10px 10px $aside-left+10px;
        background: #f2f2f2;
        overflow: auto;
        &.some {
            padding: $header-top+10px 10px 10px 74px;
        }
    }

    .nolo {
        text-align: center;
        padding-top: 200px;
    }
</style>
