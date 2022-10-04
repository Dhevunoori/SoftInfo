import Vue from 'vue'
import VueRouter from 'vue-router'
import  TablePage from '../views/TablePage.vue'
import SettingsPage from '../views/SettingsPage'
import CardsPage from '../views/CardsPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TablePage
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
