import { createRouter, createWebHistory } from 'vue-router'
import RolesList from '../views/RolesList.vue'
import RoleView from '../views/RoleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/roles',
      name: 'roles-list',
      component: RolesList
    },
    {
      path: '/roles/:id',
      name: 'role-find',
      component: RoleView
    },
  ]
})

export default router
