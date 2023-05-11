import { createApp } from "vue"
import App from "./App.vue"

// 1.全局引入
// import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// app.use(ElementPlus)

import "normalize.css"
import "./assets/css/main.css"
import pinia from "./store"
import router from "./router"

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.mount("#app")
