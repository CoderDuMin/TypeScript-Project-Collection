import { LOGIN_TOKEN } from "@/common/constants"
import { localCache } from "@/utils/cache"
import { BASE_URL, TIME_OUT } from "./config"
import DMRequest from "./request"

const dmRequest = new DMRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export default dmRequest
