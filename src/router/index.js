import Vue from 'vue'
import Router from 'vue-router'

// Files & Components

import Home from '@/pages/Home'
import DcHeroes from '@/pages/DcHeroes'
import MarvelHeroes from '@/pages/MarvelHeroes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { bodyClass: 'home' }
    },
    {
      path: '/dc-heroes',
      name: 'DcHeroes',
      component: DcHeroes,
      meta: { bodyClass: 'dc' }
    },
    {
      path: '/marvel-heroes',
      name: 'MarvelHeroes',
      component: MarvelHeroes,
      meta: { bodyClass: 'marvel' }
    }
  ]
})
