import axios from '@/utils/axios'

const api = {
  getCategoryData() {
    return axios.get('/api/category/list')
  },
  getNavData() {
    return axios.get('/api/index')
  },

  getHotspots() {
    return axios.get('/api/hotspots')
  },
}

export default api
