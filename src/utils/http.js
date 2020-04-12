import axios from "axios"

const instance = axios.create({
    baseURL: 'https://b2capigateway.yiguo.com', //基本的url
    timeout: 3000,  //延时默认3秒
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "appName": "3000025"
    }  //请求头
});

const instance2 = axios.create({
    baseURL:'/api', //配置的url也可

});

//  请求之前的拦截操作
instance2.interceptors.request.use(
    config=>{
        console.log('config',config)
        if(localStorage.getItem('token')){  //如果token存在
            config.headers.token=localStorage.getItem('token')

        }
        return config
    }
)
// 响应之后的拦截操作
instance2.interceptors.response.use(res=>{
    console.log('res',res)
    if(res.data.err===0){  //说明后端给我们前端返回的数据是正常的
        return res.data

    }else{
        return Promise.reject(res.data.msg)
    }
})

export {instance,instance2}