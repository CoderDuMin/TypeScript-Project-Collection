import { LOGIN_TOKEN } from "@/common/constants"
import router from "@/router"
import { getRoleMenuById, getUserById, login } from "@/service/modules/login"
import { localCache } from "@/utils/cache"
import { mapMenusToPermissions, mapMenusToRoutes } from "@/utils/map-menus"
import { defineStore } from "pinia"

interface ILoginState {
    token: string
    userInfo: any
    userMenus: any,
    permissions:string[]
}

const useLoginStore = defineStore("login", {
    state: (): ILoginState => {
        return {
            token: "",
            userInfo: {},
            userMenus: {},
            permissions:[]
        }
    },
    actions: {
        loginAction(account: any) {
            login(account).then(async (res) => {
                if (res.data) {
                    //1.账号登录, 获取token等信息
                    const { id, name, token } = res.data
                    this.token = token
                    localCache.setCache(LOGIN_TOKEN, this.token)

                    //2.获取登录用户的详细信息(role信息)
                    const userInfo = (await getUserById(id)).data
                    this.userInfo = userInfo

                    //3.根据角色请求用户的权限(菜单menus)
                    const userMenus = (await getRoleMenuById(id))?.data || []
                    this.userMenus = userMenus

                    this.permissions = mapMenusToPermissions(userMenus)

                    // 4.进行本地缓存
                    localCache.setCache('userInfo', userInfo)
                    localCache.setCache('userMenus', userMenus)

                    // 重要: 动态的添加路由
                    const routes = mapMenusToRoutes(this.userMenus)
                    console.log('routes',routes)
                    routes.forEach((route) => router.addRoute('main', route))

                    //5.跳转首页
                    router.push("/main")
                }
            })
        },
        loadLocalCacheAction() {
          // 1.用户进行刷新默认加载数据
          const token = localCache.getCache(LOGIN_TOKEN)
          const userInfo = localCache.getCache('userInfo')
          const userMenus = localCache.getCache('userMenus')
          if (token && userInfo && userMenus) {
            this.token = token
            this.userInfo = userInfo
            this.userMenus = userMenus
            this.permissions = mapMenusToPermissions(userMenus)
            // 2.动态添加路由
            const routes = mapMenusToRoutes(userMenus)
            routes.forEach((route) => router.addRoute('main', route))
          }
        },
        logoutAction(){
          localCache.clear()
          this.token = ''
          this.userInfo = {}
          this.userMenus = {}
          this.permissions = []
        }
    }
})

export { useLoginStore }
