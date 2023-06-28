import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/Index.vue";
import IncludeView from '@/views/include.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView
    },
    {
      path: '/include',
      name: 'Include',
      component: IncludeView
    }
  ]
})

export default router