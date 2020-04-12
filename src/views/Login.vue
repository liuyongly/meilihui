<template>
  <!-- <div id="box">
    <h3>账号密码登录</h3>
    <p>注册即送2600元新人红包</p> -->
    <Login>
      <form @submit.prevent="login">
        <van-field v-model="username" placeholder="用户名" />
        <van-field v-model="password" type='password' placeholder="密码" />
        <van-button type="primary submit" color='#ccc' block><i class="iconfont icon-jiantou-you"></i></van-button>
      </form>
      <p class="reg" @click="handlereg">注册</p>
    </Login>
  <!-- </div> -->
</template>
<script>
import { instance2 } from "@/utils/http";
// 引入按钮相关
import Vue from 'vue';
import { Button,Field,Dialog } from 'vant';
Vue.use(Button);  //按钮
Vue.use(Field);   //输入框

// 引入组件
import Login from '@/components/Login'

export default {
  components:{
    Login,
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.username.trim() || !this.password.trim()) {
        Dialog({ message: '请输入用户名或密码哦' });
        return;
      } else {
        instance2.post("/login", {
            //前不用加 /api ，instanec2中的会直接进行拼接
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log("res________", res);
            // 将token保存到本地储存里面去
            localStorage.setItem("token", res.token);
            // 跳转到个人中心
            this.$router.replace("/mine");
          }).catch(err=>Dialog({ message: err}));
      }
    },
    handlereg(){
      // this.$router.replace('/center')
     this.$router.replace('/regsiter')
    }

  }
};
</script>
<style lang="scss" scoped>
  
   .reg{
     position:absolute;
     right:0.8rem;
   }
   .van-button{
     margin-top:0.4rem;
   }
 

</style>