import variables from '@/styles/variables.scss'

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  /**
   * menu动态样式
   */
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened
}

export default getters
