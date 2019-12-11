import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClockAnimal from '../views/ClockAnimals'
import SelectAnimals from '../views/SelectAnimals.vue'

import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/select-animals',
    name: 'select-animals',
    component: SelectAnimals
  },
  {
    path: '/clock-animals',
    name: 'clock-animals',
    component: ClockAnimal,
    beforeEnter: (to, from, next) => {
      if (from.name === 'select-animals' && store.state.selectedAnimals.length !== 0) {
        next();
      } else {
        next('/select-animals');
      }
    }
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
