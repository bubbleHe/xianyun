

//存数据 state
export const state = () =>{
    //采用接口返回的数据结构
    return{
        userInfo:{
            token:'',
            user:{
                
            }
        }
    }
}

//mutations 同步修改 state 数据
export const mutations={
    // 设置用户的数据
        setUserInfo(state,data){
            state.userInfo=data;
        },

    //退出
    clearUserInfo(state){
        state.userInfo={
            token:'',
            user:{
                
            }
        }
    }
}


//actions 异步设置修改state 数据
export const actions={
    //第一个store对象
    //第二个参数
    login({commit},data){
        this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
        })
        .then(res=>{
            // console.log(res)
            // const data=res.data
            commit("setUserInfo",res.data)
        })

    },
    // 注册
    register(){}
    
}