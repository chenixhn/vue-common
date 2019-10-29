<template>
<div class="login_box">
  <img class="logo_box" src="~@/assets/images/login/login_logo.png" alt="logo">
  <el-form ref="AccountFrom" :model="account" :rules="rules" class="inp_box">
    <h3>管理系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" class="_inp" v-model="account.username" auto-complete="off" placeholder="用户名">
        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" class="_inp" v-model="account.pwd" auto-complete="off" placeholder="密码">
        <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
      </el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" class="_btn" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</div>
  
</template>

<script>
// import API from "../api/api_user";
// import MenuUtils from "@/utils/MenuUtils";
var routers = [];

export default {
  data() {
    return {
      account: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  mounted() {
    // if(localStorage.getItem('sx') == '1') {
    //     this.$message({
    //       type:'warning',
    //       message:'登录超时，请重新登陆',
    //       // duration:3000,
    //       onClose() {
    //         localStorage.removeItem('sx');
    //       }
    //     })
    // }
  },
  methods: {
    handleLogin() {
      let that = this;
      this.$refs.AccountFrom.validate(valid => {
        if (valid) {
            sessionStorage.username = '浩';
            sessionStorage.userId = '123';
            this.$router.push({path: '/home'});
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login_box {
  width: 100vw;
  height: 100vh;
  min-height: 680px;
  min-width: 1200px;
  background: url('~@/assets/images/login/login_bg.png')no-repeat;
  background-size: 100% 100%;
  .logo_box {
      width: 10.41666vw;
      height: 2.105vw;
      position: absolute;
      left: 22.39583vw;
      top: 12.76041vw;
  }
}
.inp_box {
  width: 20.83333vw;
  height: 20.83333vw;
  position: absolute;
  left: 22.39583vw;
  top: 19.79166vw;
  h3 {
    margin: 0;
    padding-bottom: 1.04166vw;
    position: relative;
    top: -0.3083vw;
  }
  ._btn {
    margin-top: 1vw;
    width: 20.83333vw;
    background-color: #4D69F6;
    border-color: #4D69F6;
  }
}
</style>
