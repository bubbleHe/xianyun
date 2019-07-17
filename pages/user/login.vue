<template>
  <div class="container">
    <!-- 登录/注册 tab 按钮 -->
    <el-row type="flex" class="main" justify="center" align="middle">
      <div class="form-wrapper">
        <el-row type="flex" justify="center" class="tabs">
          <span
            v-for="(item,index) in ['登录','注册']"
            :key="index"
            @click="handleChangeTab(index)"
            :class="{active: currentTab=== index}"
          >{{item}}</span>
        </el-row>
        <!-- 登录功能 -->
        <LoginForm v-if="currentTab == 0"/>
        <RegisterForm v-if="currentTab == 1"/>
      </div>
    </el-row>
  </div>
</template>
<script>
import LoginForm from "@/components/user/loginForm.vue"
import RegisterForm from '@/components/user/registerForm.vue'
export default {
  data() {
    return {
      currentTab: 0
    };
    
  },
  methods: {
    handleChangeTab(index) {
      this.currentTab = index;
    }
  },
  components:{
    LoginForm,
    RegisterForm
  }
};
</script>
<style lang="less" scoped>
.container {
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  height: 700px;
  min-width: 1000px;
  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .form-wrapper {
    width: 400px;

    span {
      width: 50%;
      height: 50px;
      line-height: 48px;
      text-align: center;
      border-top: 2px solid #ccc;
      background-color: #eee;
      &.active {
        color: orange;
        border-top-color: orange;
        background: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>