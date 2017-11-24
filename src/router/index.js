import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Content',
    component: require('../views/Content.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: require('../views/search/Search.vue')
  },
  {
    path: '/getcode',
    name: 'getcode',
    component: require('../views/getcode.vue')
  }
]

export default new Router({
  routes: routes
})
