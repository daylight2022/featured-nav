import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: () => import('@/views/Detail.vue'),
        },
        {
          path: 'include',
          name: 'Include',
          component: () => import('@/views/Include.vue'),
        },
        {
          path: 'feedback',
          name: 'Feedback',
          component: () => import('@/views/Feedback.vue')
        },
        {
          path: 'links',
          name: 'Llinks',
          component: () => import('@/views/Links.vue')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/About.vue')

        }
      ],
    },
  ],
})

export default router
