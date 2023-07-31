import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExercisesView from '../views/ExercisesView.vue'
import ExerciseOne from '../components/ExerciseOne.vue'
import ExerciseTwo from '../components/ExerciseTwo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: ExercisesView,
    children: [
      {
        path: 'exercise-one',
        name: 'exercise-one',
        component: ExerciseOne
      },
      {
        path: 'exercise-two',
        name: 'exercise-two',
        component: ExerciseTwo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
