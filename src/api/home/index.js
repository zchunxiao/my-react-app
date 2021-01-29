import Fetch from '@/service/fetch'
//import Axios from '@/service/axios'

// fetch获取首页列表信息
export const getList = (params)=>  Fetch('/api/trade/support/v1/home/order/list',params)

// export const getData = (params)=>  Axios('/api/trade/support/v1/home/order/list',params)

export const getData = (params)=>  Fetch('/api/trade/support/v1/home/order/list',params)     

