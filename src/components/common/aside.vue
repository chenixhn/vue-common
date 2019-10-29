<template>
    <el-row class="tac" v-if="username">
        <el-col>
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
            <div class="logo" :class="{some:isCollapse}"></div>
            <el-menu
                :collapse="isCollapse"
                :unique-opened="true"
                :default-active="activeMenuIndex"
                class="el-menu-vertical-demo"
                :router="true"
                @open="handleOpen"
                :collapse-transition="false"
                @close="handleClose">
                <el-submenu v-for="(item,key) in menu" :key="key" :index="item.router">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{item.groupTitle}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item
                            v-for="(children,key) in item.children"
                            :key="key"
                            :index="children.router"
                            :disabled="children.disabled">
                            {{children.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
    <div v-else class="nolo">无登录用户数据</div>
</template>

<script>
    export default {
        name: 'sidebar',
        data: function () {
            return {
                username: sessionStorage.username,
                menu: [
                    {
                        groupTitle: '功能实例',
                        router: '/router11',
                        children: [
                            {router: '/page1', title: '用户联系人', disabled: false},
                            {router: '/page2', title: '计算属性-购物车', disabled: false},
                            {router: '/page3', title: '音乐播放器', disabled: false}
                        ]
                    },
                    {
                        groupTitle: '导航2',
                        router: '/router21',
                        children: [
                            {router: '/router21', title: '选项21', isDisable: true},
                            {router: '/router22', title: '选项22', isDisable: true}
                        ]
                    }
                ]
            };
        },
        props: {
            isCollapse: Boolean,
            require: true
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            activeMenuIndex() {
                // debugger
                return this.$route.path;
            }
        }
    };
</script>
<style lang="scss" scoped>
    .logo {
        height: 44px;
        background: url("~@/assets/images/login/login_logo.png") no-repeat 0 -23px;
        background-size: 80% 80%;
        background-position: 10px 4px;
        &.some {
            background: url("~@/assets/images/login/login_logo.jpg") no-repeat -20px 0;
            background-size: 100% 100%;
            background-position: 0 0;
        }
    }
</style>
