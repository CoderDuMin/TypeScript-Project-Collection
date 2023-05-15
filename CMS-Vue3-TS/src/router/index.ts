import { LOGIN_TOKEN } from "@/common/constants"
import { localCache } from "@/utils/cache"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
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
    }
})
export default router
