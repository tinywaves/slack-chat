import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
// 拦截器
// 请求拦截
instance.interceptors.request.use(
  config => {
    console.log('请求被拦截')
    return config
  },
  error => {}
)
// 响应拦截
instance.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          break
      }
    }
    return error
  }
)

export default instance
