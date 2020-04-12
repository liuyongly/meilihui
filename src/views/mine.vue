<template>
    <div class="center">
        <div class="header">
            <i class="iconfont icon-jiantou-zuo" @click="handleback"></i>
            <span>个人中心</span>
            <i class="iconfont icon-gengduo"></i>
        </div>
        <div class="content">
            <div class="infor">
                <div><img src=" " alt=""></div>
                <p>seori</p>
                <span>查看并编辑个人资料</span>
            </div>
            <div class="order">
                <div class="oleft">
                    <span>0</span>
                    <p>未支付订单</p>
                </div>
                <div class="oright">
                    <span>0</span>
                    <p>全部订单</p>
                </div>
                
            </div>
            <ul>
                <li
                    v-for="data in datalist"
                    :key="data"
                >{{data}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            datalist:['魅力社','我的优惠券','我的地址','联系我们','退出登录']
        }
    },
    methods:{
        handleback(){
            this.$router.back()
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .center{
        padding:0.3rem;
    }
    .header {
        display:flex;
        justify-content: space-between;
        font-size: 20px;
        color:black;

    }
    .content{
        padding:0.5rem;
        .infor,.order{
            border-bottom: solid 2px black;
            padding:0.3rem 0 0.3rem;
        }
        ul{
            font-size: 18px;
            li{
                border-bottom: solid 1px #ccc;
                color:black;
                height:1.6rem;
                line-height: 1.6rem;
            }
            li:after{
                font-family: "iconfont";
                content:"\e72f";
                position: absolute;
                right:0.6rem;
            }
        }
    }
    .order{
        overflow: hidden;
        div{
            width:50%;
            float: left;
            text-align: center;
        }
    }

</style>