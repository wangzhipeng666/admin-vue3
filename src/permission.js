import router from '@/router'

/**
 * 路由前置守卫
 * @param {*} to 要到哪里去
 * @param {*} from 从哪里来
 * @param {*} next 是否要去
 */
router.beforeEach((to, from, next) => {
// 1.用户已登录，则不允许进入login

// 2.用户未登录，则只允许进入login
})
