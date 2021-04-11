import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// import "./assets/scss/main.scss"
import "./assets/tailwind.css"

const mountEl = document.querySelector<HTMLDivElement>("#root")
if (!mountEl) throw new Error("No mount element found.")

const app = createApp(App).use(router)

app.mount(mountEl)
