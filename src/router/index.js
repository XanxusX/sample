import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../components/Form.vue'
import Waiting from '../components/Waiting.vue'
import Undispatched from '../components/Undispatched.vue'
import Table from '../components/Table.vue'
import Calendar from '../components/Calendar'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import ApplicationForm from '../components/ApplicationForm'
import Home from '../components/home'
import Setting from '../components/Setting'
import AFvalue from '../components/AFvalue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Login',
  component: Login
},
{
  path: '/home',
  name: 'Home',
  component: Home
},
{
  path: '/form',
  name: 'Form',
  component: Form
},
{
  path: '/undispatched',
  name: 'undispatched',
  component: Undispatched
},
{
  path: '/table',
  name: 'Table',
  component: Table
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
{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
},
{
  path: '/applicationform',
  name: 'ApplicationForm',
  component: ApplicationForm
},
{
  path: '/setting',
  name: 'Setting',
  component: Setting
},
{
  path: '/applicationform',
  name: 'ApplicationForm',
  component: ApplicationForm
},
{
  path: '/afvalue',
  name: 'AFvalue',
  component: AFvalue
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router