import { createApp } from 'vue'
import App from './app.vue'
import Route from './router/index.ts'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn' //配置国际化 引入中文语言包
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(Route)
app.mount('#app')
