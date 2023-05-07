import { login } from "@/service/modules/login"
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
                const { id, name, token } = res.data
                this.id = id
                this.name = name
                this.token = token
                localStorage.setItem("token", token)
            })
        }
    }
})

export { useLoginStore }
