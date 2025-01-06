/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { errorMessage } from '@/helpers/common.ts'

const baseURL = import.meta.env.VITE_API_URL as string
const instance = axios.create({
  baseURL,
  headers: {
    contentType: 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
  },
})

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token') as string)

    if (token && config.headers) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const message =
      error?.response?.data.error?.message ||
      error?.response?.data.error ||
      error?.response?.statusText ||
      '何か問題でも。'

    errorMessage(message)
    if (error.response) {
      if ([401].includes(error.response.status)) {
        return Promise.reject('Unauthorized')
      }
      return Promise.reject(error)
    }
  },
)

const ApiService = {
  setResponseType(type: any) {
    instance.defaults.responseType = type
  },
  get(resource: any, config = {}) {
    return instance.get(resource, config)
  },
  post(resource: any, params: any, config = {}) {
    return instance.post(`${resource}`, params, config)
  },
  update(resource: any, params: any, config = {}) {
    return instance.put(resource, params, config)
  },
  patch(resource: any, params: any, config = {}) {
    return instance.patch(resource, params, config)
  },
  delete(resource: any, config = {}) {
    return instance.delete(resource, config)
  },
  updateSingle(resource: any, params: any, config = {}) {
    return instance.patch(resource, params, config)
  },
  customRequest(config: any) {
    return instance(config)
  },
  postFormData(resource: any, params: any) {
    return instance.post(resource, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}

export default ApiService
