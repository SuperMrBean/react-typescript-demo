import qs from 'qs'
import { message } from 'antd';
import axios,{ AxiosResponse, AxiosRequestConfig } from 'axios'
import { Modal } from 'antd';
import {createBrowserHistory} from 'history';
const axiosConfig: AxiosRequestConfig = {
  // 请求后的数据处理
  transformResponse: [(data: AxiosResponse) => {
    return data
  }],
  transformRequest: [(data: any) => {
    return qs.stringify(data)
  }],
  // 超时设置s
  timeout: 30000,
  // 跨域是否带Token
  withCredentials: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
// 取消重复请求
const pending: Array<{
  url: string,
  cancel: any
}> = []
const cancelToken = axios.CancelToken
const removePending = (config: any) => {

  // tslint:disable-next-line:forin
  for (const p in pending) {
    const item: any = p
    const list: any = pending[p]
    // 当前请求在数组中存在时执行函数体
    if (list.url === config.url + '&request_type=' + config.method) {
      // 执行取消操作
      list.cancel()
      // 从数组中移除记录
      pending.splice(item, 1)
    }
  }
}

const service = axios.create(axiosConfig)

// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    removePending(config)
    config.cancelToken = new cancelToken((c: any) => {
      pending.push({ url: config.url + '&request_type=' + config.method, cancel: c })
    })
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (res: any) => {
    removePending(res.config)
    if (res.data) {
      // LoadingInterface.close();
      if (res.status === 200) {
        if (res.data.status === 200) {
          return res.data.data
        } else if (res.data.status === 403) {
          // 未登录或者token过期，重定向到登录页面
          Modal.info({
            title: '通知',
            content:'登录信息已过期，请重新登录',
            onOk(){
              const history = createBrowserHistory()
              history.push('/login')
              window.location.reload()
            }
          })
        } else {
          message.error(res.data.message)
          return Promise.reject(res.data.message)
        }
      } else {
        message.error( res.statusText )
        return Promise.reject(res.statusText)
      }

    }
  },
  (error: any) => {
    message.error('请求失败，请稍后再试')
    return Promise.reject(error)
  }
)

export default service
