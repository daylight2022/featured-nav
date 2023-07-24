import axios from '@/utils/axios'
import ICategoryItem from '@/interfaces/ICategoryItem';
import INavItem from '@/interfaces/INavItem';

const api = {
  // Category
  getCategoryData() {
    return axios.get<ICategoryItem[]>('/api/category/list')
  },

  createCategory(category: ICategoryItem) {
    return axios.post('/api/category', category);
  },

  updateCategory(category: ICategoryItem) {
    return axios.put(`/api/category/edit`, category);
  },

  deleteCategory(id: number) {
    return axios.delete(`/api/category/${id}`);
  },

  getNavData() {
    return axios.get<INavItem[]>('/api/index')
  },

  // Nav
  createNav(nav: INavItem) {
    return axios.post('/api/nav', nav);
  },

  updateNav(nav: INavItem) {
    return axios.put(`/api/nav`, nav);
  },

  deleteNav(id: number) {
    return axios.delete(`/api/nav/${id}`);
  },

  // Hotspots
  getHotspots() {
    return axios.get('/api/hotspots')
  },
}

export default api
