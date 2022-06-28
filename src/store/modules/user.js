import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            this.commmit('user/setToken', data.data.data.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
