<template>
  <div class="container">

    <el-row
    type="flex"
    class="main"
    justify="center"
    align="middle"
    >
    <div class="form-wrapper">
      <el-row
      type="flex"
      justify="center"
      class="tabs"
      >
      <span v-for="(item,index)in ['登录','注册']"  :key="index">
        {{item}}
      </span>

      </el-row>
    </div>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  height: 700px;
  min-width: 1000px;
  .main{
        width:1000px;
        height: 100%;
        margin:0 auto;
        position: relative;}
}
</style>