import { createApp } from "vue"
import App from "./App.vue"

import "normalize.css"
import "./assets/main.css"
import pinia from "./store"

createApp(App).use(pinia).mount("#app")
