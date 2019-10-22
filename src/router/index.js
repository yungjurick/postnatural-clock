import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClockAnimal from '../views/ClockAnimals'
import ClockWaste from '../views/ClockWaste'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/clock-animals',
    name: 'clock-animals',
    component: ClockAnimal
  },
  {
    path: '/clock-waste',
    name: 'clock-waste',
    component: ClockWaste
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
