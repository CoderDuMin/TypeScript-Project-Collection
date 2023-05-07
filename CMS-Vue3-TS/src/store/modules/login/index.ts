import { login } from "@/service/modules/login"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"

const LOGIN_TOKEN = "login/token"

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
                    const { id, name, token } = res.data
                    this.id = id
                    this.name = name
                    this.token = token
                    localCache.setCache(LOGIN_TOKEN, this.token)
                }
            })
        }
    }
})

export { useLoginStore }
