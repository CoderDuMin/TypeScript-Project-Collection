import { LOGIN_TOKEN } from "@/common/constants"
import { localCache } from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
    if (to.path != "/login") {
        //登录拦截
        let token = localCache.getCache(LOGIN_TOKEN)
        if (!token) {
            return "/login"
        }
        if(to.path == '/main'){
          if(firstMenu){
            console.log('firstmenu',firstMenu)
            return firstMenu.url
          }
        }
    }
})
export default router
