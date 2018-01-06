import Vue from 'vue'
import Router from 'vue-router'
import Terrace from '../pages/terrace'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'terrace',
      component: Terrace
    }
  ]
})
