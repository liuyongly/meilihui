<template>
  <!-- <div id="box">
    <h3>账号密码登录</h3>
    <p>注册即送2600元新人红包</p> -->
    <Login>
      <form @submit.prevent="reg">
        <van-field v-model="username" placeholder="用户名" />
        <van-field v-model="password" type='password' placeholder="密码" />
        <van-field v-model="repass" type='password' placeholder="确认密码" />
        <van-button type="primary submit" color='#ccc' block><i class="iconfont icon-jiantou-you"></i></van-button>
      </form>
      <p class="log" @click="handlereg">登录</p>
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
      password: "",
      repass:''
    };
  },
  methods: {
    reg() {
      if (!this.username.trim() || !this.password.trim() || !this.repass.trim()) {
        // alert("请完整输入哦");
        Dialog({ message: '请完整输入哦',closeOnClickOverlay:true });  //closeOnClickOverlay:true 点击遮罩层关闭弹窗
        return;
      } else if(this.password!=this.repass){
        //   alert('密码与确认密码不一致哦')
        Dialog({ message: '密码与确认密码不一致哦' });

          return;
      }else{
        instance2.post("/reg", {
            //前不用加 /api ，instanec2中的会直接进行拼接
            username: this.username,
            password: this.password
          })
          .then(res => {
            // alert('恭喜您，注册成功')
            Dialog({ message: '恭喜您，注册成功' });

            // 跳转到个人中心
            this.$router.replace("/login");
          }).catch(err=>alert(err));
      }
    },
    handlereg(){
      // this.$router.replace('/center')
     this.$router.replace('/login')
    }

  }
};
</script>
<style lang="scss" scoped>
  
   .log{
     position:absolute;
     right:0.8rem;

   }
   .van-button{
     margin-top:0.4rem;
   }
 

</style>