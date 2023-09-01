import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import router from './router'
import 'normalize.css/normalize.css'
import '~/styles/index.scss'
import 'uno.css'
import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App)
app.use(pinia).use(router).mount('#app')
// app.mount('#app')
