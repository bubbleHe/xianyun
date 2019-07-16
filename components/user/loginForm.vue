<template>
    <el-form 
        :model="form" 
        ref="form"
        :rules="rules" 
        class="form">

        <el-form-item class="form-item" prop="username">
            <el-input 
            v-model="form.username"
            placeholder="用户名/手机">
            </el-input>
        </el-form-item>

        <el-form-item class="form-item"  prop="password">
            <el-input 
            v-model="form.password"
            placeholder="密码" 
            type="password">
            </el-input>
        </el-form-item>

        <p class="form-text">
            <nuxt-link to="#">忘记密码</nuxt-link>
        </p>

        <el-button 
        class="submit"
        type="primary"
        @click.native="handleLoginSubmit">
            登录
        </el-button>
    </el-form>

</template>

<script>
export default {
data () {
    return {
        form: {
                username: "",
                password: ""
            },
        rules:{
            username:[
                {required:true,message:"请输入用户名",trigger:'blur'}
            ],
            password:[
                {required:true,message:"请输入密码",trigger:'blur'}
            ]
        }
    }
},
methods:{
    handleLoginSubmit(){
        this.$refs['form'].validate((valid)=>{
            if(valid){
                // 调用actions的登录方法
                this.$store.dispatch('user/login',this.form)
                .then(res=>{
                    this.$message.success('登录成功正在跳转....')
                    setTimeout(() => {
                        this.$router.back();
                    }, 1000);
                })
            }
        })
    }
}
}
</script>

<style lang="less" scoped>
.form{
    padding: 25px;
    // border: 1px solid #ccc;
    background-color: #fff;
}
.form-item{
    margin-bottom: 20px;
}
.form-text{
    text-align: right;
    color: #409EFF;
    font-size: 12px;
    line-height: 1;
}
.submit{
        width:100%;
        margin-top:10px;
    }
</style>

