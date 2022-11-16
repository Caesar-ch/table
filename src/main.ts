import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import 'element-plus/dist/index.css'
import install from './global'
const app = createApp(App)
install(app)
app.mount('#app')
