<template>
    <div id="box">
        <h3>账号密码登录|注册</h3>
        <p>注册即送2600元新人红包</p>
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    html{
        background:white;
    }
    #box {
        padding:1rem 0.8rem;
        .van-field{
            box-shadow: 0 0.08rem 0.133333rem rgba(0,0,0,.15), 0 -0.013333rem 0.133333rem rgba(0,0,0,.05);
        }
        h3{
            font-size: 0.8rem;
            color:black;
            margin-bottom: 10px;
            
        }
        p{
            margin-bottom: 1rem;
        }
    }

</style>