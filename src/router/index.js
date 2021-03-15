import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-event',
    name: 'create-event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateEvent.vue')
  },
  {
    path: '/event-info/:id',
    name: 'event-info',
    component: () => import('../views/InfoPage.vue')
  }
]




const router = new VueRouter({
  routes
})

export default router
