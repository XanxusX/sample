import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Setting from '../components/Setting.vue'
import Waiting from '../components/Waiting.vue'
import Undispatched from '../components/Undispatched.vue'
import List from '../components/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/undispatched',
    name: 'undispatched',
    component: Undispatched
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
