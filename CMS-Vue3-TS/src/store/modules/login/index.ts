import { LOGIN_TOKEN } from "@/common/constants"
import router from "@/router"
import { login } from "@/service/modules/login"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"

const useLoginStore = defineStore("login", {
    state() {
        return {
            id: "",
            name: "",
            token: ""
        }
    },
    actions: {
        loginAction(account: any) {
            login(account).then((res) => {
                if (res.data) {
                    //1.缓存登录信息、token
                    const { id, name, token } = res.data
                    this.id = id
                    this.name = name
                    this.token = token
                    localCache.setCache(LOGIN_TOKEN, this.token)
                    //2.跳转首页
                    router.push("/home")
                }
            })
        }
    }
})

export { useLoginStore }
