import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
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
    history: createWebHashHistory()
})

export default router
