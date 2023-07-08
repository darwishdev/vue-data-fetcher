import { createRouter, createWebHistory } from 'vue-router'
import DataList from '../views/DataList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'data-list',
      component: DataList
    }
  ]
})

export default router
