import Vue from 'vue'
import Router from 'vue-router'

import Trace from '@/components/Trace'
import Scape from '@/components/Scape'
import My from '@/components/My'
// import Register from '@/components/Register'
import Login from '@/components/Login'
import Detail from '@/components/Detail'

import newscape from '../components/Scape/new.vue'
import hotscape from '../components/Scape/hot.vue'
import minescape from '../components/Scape/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Login
    },
    {
      name: 'trace',
      path: '/trace',
      component: Trace
    },
    {
      name: 'scape',
      path: '/scape',
      component: Scape,
      children: [
          {
              name: 'new',
              path: 'new',
              component: newscape,
          },
          {
              name: 'hot',
              path: 'hot',
              component: hotscape,
          },
          {
              name: 'mine',
              path: 'mine',
              component: minescape,
          }
      ]
    },
    {
      name: 'my',
      path: '/my',
      component: My
    },
    {
      name: 'register',
      path: '/register',
      component: Login
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'detail',
      path: '/detail',
      component: Detail
    }
  ]
})
