import { LOGIN_TOKEN } from "@/common/constants"
import router from "@/router"
import { getRoleMenuById, getUserById, login } from "@/service/modules/login"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"

interface ILoginState {
    token: string
    userInfo: any
    userMenu: any
}

const useLoginStore = defineStore("login", {
    state: (): ILoginState => {
        return {
            token: "",
            userInfo: {},
            userMenu: {}
        }
    },
    actions: {
        loginAction(account: any) {
            login(account).then(async (res) => {
                if (res.data) {
                    //1.缓存登录信息、token
                    const { id, name, token } = res.data
                    this.token = token
                    localCache.setCache(LOGIN_TOKEN, this.token)
                    //2.获取用户信息
                    const userInfo = (await getUserById(id)).data
                    this.userInfo = userInfo

                    //3.获取角色菜单
                    const roleMenu = (await getRoleMenuById(id)).data
                    this.userMenu = roleMenu

                    //4.跳转首页
                    router.push("/main")
                }
            })
        }
    }
})

export { useLoginStore }
