<template>
  <el-form class="form" :model="form" ref="form" :rules="rules">
    <el-form-item prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click.native="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item prop="checkPassword">
      <el-input placeholder="确认密码" v-model="form.checkPassword"></el-input>
    </el-form-item>
    <el-button type="primary" class="register" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    //rule 规则
    //value  值
    //callback 回调函数
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "", // 登录用户名/手机
        password: "", // 登录密码
        checkPassword: "", // 确认密码
        nickname: "", // 昵称
        captcha: "" // 手机验证码
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],

        nickname: [{ required: true, message: "请输入名称", trigger: "blur" }],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        checkPassword: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    //发验证码
    handleSendCaptcha() {
      //判断手机是否存在

      if (!this.form.username.trim()) {
        this.$confirm("手机号码为空", "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
        // this.$message.warning('请输入手机号码')

        return;
      }
      // 判断手机是否11位
      if (this.form.username.length !== 11) {
        this.$confirm("手机号码格式错误", "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
      }
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        // console.log(res)
        const code = res.data.code;
        // const {code}=res.data
        // this.$alert(`手机验证码为${code}`)
        this.$alert(`手机验证码是：${code}`, "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      });
    },
    //注册
    handleRegSubmit() {
      // console.log(this.form)
      // this.$refs['form'].validate((valid)=>
      this.$refs.form.validate(valid => {
        if (valid) {
          const { checkPassword, ...props } = this.form;
          this.$axios({
            url: "/accounts/register",
            method: "POST",
            data: props
          }).then(res => {
            // console.log(res.data)
            // console.log(22323);
            // this.$store.commit("user/setUserInfo", res.data);
            this.$message.success("注册成功");
            this.$router.back();
          });
        }
      });
    }
  //   handleRegSubmit(){
  //          this.$refs.form.validate(valid => {

  //               if(valid){
  //                  // props是除了checkPassword剩余的属性
  //                  const {checkPassword, ...props} = this.form;

  //                  // 注册接口（自行放到actions）
  //                  this.$axios({
  //                      url: "/accounts/register",
  //                      method: "POST",
  //                      data: props
  //                  }).then(res => {
  //                      // 把数据保存到vuex,user是模块名字（命名空间）
  //                       this.$store.commit("user/setUserInfo", res.data);

  //                       this.$router.back();
  //                  })
  //              }
  //          })
  //       }
  // }
}}
</script>

<style lang="less" scoped>
.form {
  background-color: #fff;
  padding: 15px;
  .register {
    width: 100%;
  }
}
</style>

