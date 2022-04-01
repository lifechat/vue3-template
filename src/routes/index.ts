import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'


const routes:Array<RouteRecordRaw> = [
    { 
        path: '/', redirect: { name: 'Home' } 
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router

export const asyncRouterMap = [{ path:'*',redirect:'/404',hidden:true}]; // 没有匹配路由路径重定向