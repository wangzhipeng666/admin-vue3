import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers.icode = 'EB0A2D823A02569A'
    if (store.getters.token) {
      // 如果存在token 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    // 根据success判断返回是否成功
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage(message)
      return Promise.reject(new Error(message))
    }
  },
  error => {
    // 将来用来处理超时问题
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
