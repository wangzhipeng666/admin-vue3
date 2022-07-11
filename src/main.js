import { createApp } from 'vue'
import i18n from '@/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
// 导入Icons
import installIcons from '@/icons'
// 引入权限控制模块
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
