import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/assets/base/base.css'
import formTitle from '@/components/form-title.vue'
const app = createApp(App)
//全局注册组件
app.component('form-title',formTitle)

app.use(router).mount('#app')
