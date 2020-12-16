import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover.vue'
import Mine from '../views/Mine.vue'
import '../routerDefend/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'Discover',
    component:Discover
  },
  {
    path: '/mine',
    name: 'Mine',
    component:Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
