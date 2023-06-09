import axios from "axios"
import type { AxiosInstance } from "axios"
import type { DMRequestConfig } from "./type"
import { ElMessage } from "element-plus"
import { localCache } from "@/utils/cache"
import { LOGIN_TOKEN } from "@/common/constants"

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class DMRequest {
    instance: AxiosInstance

    // request实例 => axios的实例
    constructor(config: DMRequestConfig) {
        this.instance = axios.create(config)

        // 每个instance实例都添加拦截器
        this.instance.interceptors.request.use(
            (config) => {
                let token = localCache.getCache(LOGIN_TOKEN)
                if (config.headers && token) {
                    config.headers.Authorization = "Bearer " + token
                }
                return config
            },
            (err) => {
                console.log("全局请求失败的拦截")
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                return res.data
            },
            (err) => {
                ElMessage.error(err?.response?.data)
                return err
            }
        )
    }

    // 封装网络请求的方法
    // T => IHomeData
    request<T = any>(config: DMRequestConfig<T>) {
        // 单次请求的成功拦截处理
        if (config.interceptors?.requestSuccessFn) {
            config = config.interceptors.requestSuccessFn(config)
        }

        // 返回Promise
        return new Promise<T>((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    // 单词响应的成功拦截处理
                    if (config.interceptors?.responseSuccessFn) {
                        res = config.interceptors.responseSuccessFn(res)
                    }
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    get<T = any>(config: DMRequestConfig<T>) {
        return this.request({ ...config, method: "GET" })
    }
    post<T = any>(config: DMRequestConfig<T>) {
        return this.request({ ...config, method: "POST" })
    }
    delete<T = any>(config: DMRequestConfig<T>) {
        return this.request({ ...config, method: "DELETE" })
    }
    patch<T = any>(config: DMRequestConfig<T>) {
        return this.request({ ...config, method: "PATCH" })
    }
}

export default DMRequest
