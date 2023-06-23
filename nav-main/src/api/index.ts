import axios from '@/utils/axios'

const api = {
  getInitData() {
    return axios.get('/data')
  },
}

export default api
