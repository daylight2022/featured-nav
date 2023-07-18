const axios = require('axios')

const instance = axios.create({
  // baseURL: 'http://127.0.0.1:4523/m1/3027308-0-default',
  baseURL: 'https://api.vvhan.com',
  timeout: 3000,
})

// instance.interceptors.request.use(
//   (config) => {
//     config.headers['User-Agent'] =
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82'
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

module.exports = {
  getBaiduHotspots: async () => {
    try {
      const response = await instance.get('/api/hotlist?type=baiduRD')
      const hotspots = response.data
      return hotspots
    } catch (error) {
      console.log('Failed to fetch Baidu hotspots', error)
    }
  },
  getDouyinHotspots: async () => {
    try {
      const response = await instance.get('/api/hotlist?type=douyinHot')
      const hotspots = response.data
      return hotspots
    } catch (error) {
      console.log('Failed to fetch Douyin hotspots', error)
    }
  },
  getWeiboHotspots: async () => {
    try {
      const response = await instance.get('/api/hotlist?type=wbHot')
      const hotspots = response.data
      return hotspots
    } catch (error) {
      console.log('Failed to fetch Weibo hotspots', error)
    }
  },
  getHistoryToday: async () => {
    try {
      const response = await instance.get('/api/hotlist?type=history')
      const hotspots = response.data
      return hotspots
    } catch (error) {
      console.log('Failed to fetch history today hotspots', error)
    }
  },
}
