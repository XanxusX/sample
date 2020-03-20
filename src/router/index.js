import Vue from 'vue'
import VueRouter from 'vue-router'
import Setting from '../components/Setting.vue'
import Waiting from '../components/Waiting.vue'
import Undispatched from '../components/Undispatched.vue'
import List from '../components/List.vue'
import Calendar from '../components/Calendar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: List
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
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
