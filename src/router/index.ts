import { createRouter, createWebHistory } from 'vue-router'
import DataList from '../views/DataList.vue'
import DataFind from '../views/DataFind.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/roles',
      name: 'data-list',
      component: DataList
    },
    {
      path: '/roles/:id',
      name: 'data-find',
      component: DataFind
    }
  ]
})

export default router
