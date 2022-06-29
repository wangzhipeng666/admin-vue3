import router from '@/router'
import store from './store'

// 白名单
const whiteList = ['/login']
/**
 * 路由前置守卫
 * @param {*} to 要到哪里去
 * @param {*} from 从哪里来
 * @param {*} next 是否要去
 */
router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  // 存在token，进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token的情况下，可进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
