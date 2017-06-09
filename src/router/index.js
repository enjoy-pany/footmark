import Vue from 'vue'
import Router from 'vue-router'

import Trace from '@/components/Trace'
import Scape from '@/components/Scape'
import My from '@/components/My'
import Register from '@/components/Register'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Scape
    },
    {
      path: '/trace',
      name: 'trace',
      component: Trace
    },
    {
      path: '/scape',
      name: 'scape',
      component: Scape
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
