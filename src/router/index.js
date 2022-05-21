import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('@/views/Login.vue'),
  //   meta: {
  //     title: '登录界面'
  //   }
  // },
  // {
  //   path: '/login',
  //   redirect: '/'
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '酷屏首页统计图'
    }
  },
  // {
  //   path: '/brand',
  //   name: 'Brand',
  //   component: () => import('@/views/Brand.vue'),
  //   meta: {
  //     title: '公司品牌介绍'
  //   }
  // }
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/Brand.vue'),
    meta: {
      title: '公司品牌介绍'
    }
  },
  {
    path:'/showTrace',
    name:'ShowTrace',
    component: ()=>import('../views/ShowTrace')
  },
  {
    path:'/rootType',
    name:'/RootType',
    component: ()=>import('../views/RootType')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
