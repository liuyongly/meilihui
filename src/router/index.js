import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye.vue'
import shop from '../views/shop.vue'
import fenlei from '../views/fenlei.vue'
import mine from '../views/mine.vue'
import login from '@/views/Login' 

Vue.use(VueRouter)

  const routes = [
    {
      path:'/shouye',
      component:shouye
    },
    {
      path:'/shop',
      component:shop
    },
    {
      path:'/fenlei',
      component:fenlei
    },
    {
      path:'/mine',
      component:mine
    },
    {
      path:'/login',  
      component:login
    },
    {
      path:'/regsiter',  
      component:()=>import('@/views/Regsiter')
    },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.path==='/mine'){
    if(localStorage.getItem('token')){
      next()
    }else {
      next('/login')
    }
  }else{
    next()

  }
})



export default router
