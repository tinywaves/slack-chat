import React, { PureComponent } from 'react'
import axios from 'axios'

import instance from './service/request'

export default class App extends PureComponent {
  // async componentDidMount() {
  //   // 基于Promise
  //   // GET请求
  //   axios({
  //     baseURL: 'http://httpbin.org',
  //     url: '/get',
  //     params: {
  //       name: 'tinyRipple',
  //       age: 20
  //     },
  //     method: 'GET',
  //     timeout: 5000
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   // POST请求
  //   axios({
  //     url: 'http://httpbin.org/post',
  //     data: {
  //       name: 'tinyRipple',
  //       age: 20
  //     },
  //     method: 'POST'
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   axios
  //     .get('http://httpbin.org/get', {
  //       params: {
  //         name: 'tinyRipple',
  //         age: 20
  //       }
  //     })
  //     .then(console.log)
  //   axios
  //     .post('http://httpbin.org/post', {
  //       data: {
  //         name: 'tinyRipple',
  //         age: 20
  //       }
  //     })
  //     .then(console.log)

  //   // 基于await-async
  //   try {
  //     const res = await axios.post('http://httpbin.org/post', {
  //       data: {
  //         name: 'tinyRipple',
  //         age: 20
  //       }
  //     })
  //     console.log('await-async', res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  componentDidMount() {
    // 拦截器
    // 请求拦截
    axios.interceptors.request.use(
      config => {
        console.log('请求被拦截')
        return config
      },
      error => {}
    )
    // 响应拦截
    axios.interceptors.response.use(
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
    // axios
    //   .get('http://httpbin.org/get', {
    //     params: {
    //       name: 'tinyRipple',
    //       age: 20
    //     }
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    instance
      .get('http://httpbin.org/get', {
        params: {
          name: 'tinyRipple',
          age: 20
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return <div>App</div>
  }
}
