import { createApp } from "vue"
import App from "./App.vue"

// 1.全局引入
// import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// app.use(ElementPlus)

import "normalize.css"
import "./assets/css/main.css"
import pinia from "./store"
import router from "./router"

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount("#app")
