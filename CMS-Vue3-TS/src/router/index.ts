import { LOGIN_TOKEN } from "@/common/constants"
import { localCache } from "@/utils/cache"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes: [
        {
            path: "/",
            redirect: "/main"
        },
        {
            path: "/main",
            name: "main",
            component: () => import("@/pages/main/index.vue")
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/pages/home/index.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/pages/login/index.vue")
        }
    ],
    history: createWebHistory()
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
