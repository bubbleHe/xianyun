<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <!-- 导航菜单 -->
      <div class="navs">
        <el-row type="flex">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">机票</nuxt-link>
        </el-row>
      </div>

      <!-- 登录信息 -->
      <div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img
                src="https://c-ssl.duitang.com/uploads/item/201811/10/20181110102045_jwqny.jpg"
              />
              用户消息
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  height: 60px;
  box-shadow: 0 3px 3px #ccc;
  position: relative;
}
.main {
  width: 1000px;
  margin: 0 auto;
  line-height: 60px;
}
.logo {
  margin-right: 10px;
  img {
    width: 165px;
    height: 42px;
    margin-top: 10px;
  }
}
.navs {
  flex: 1;
  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
      color: #409eff;
      border-bottom: 5px #409eff solid;
    }
  }
  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
}
.el-dropdown-link{
 
  
img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}

}
</style>

