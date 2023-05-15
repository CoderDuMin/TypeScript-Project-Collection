import { createPinia } from "pinia"
import type { App } from 'vue'
import { useLoginStore } from "./modules/login"

const pinia = createPinia()

function registerStore(App:App<Element>){
  App.use(pinia)

  // 2.加载本地的数据
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default registerStore
