import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExercisesView from '../views/ExercisesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: ExercisesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
