import Vue from 'vue'
import Router from 'vue-router'

// Files & Components

import HomePage from '@/pages/HomePage'
import DcComics from '@/pages/DcComics'
import MarvelComics from '@/pages/MarvelComics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { bodyClass: 'home' }
    },
    {
      path: '/dc-heroes',
      name: 'DcComics',
      component: DcComics,
      meta: { bodyClass: 'dc' }
    },
    {
      path: '/marvel-heroes',
      name: 'MarvelComics',
      component: MarvelComics,
      meta: { bodyClass: 'marvel' }
    }
  ]
})
