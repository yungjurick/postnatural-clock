import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/ClockAnimals.vue')
  },
  {
    path: '/clock-waste',
    name: 'clock-waste',
    component: () => import('../views/ClockWaste.vue')
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
