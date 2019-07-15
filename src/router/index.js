import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import TopLinks from '@/components/TopLinks'
import DcHeroes from '@/components/DcHeroes'
import MarvelHeroes from '@/components/MarvelHeroes'
// import AllHeroes from '@/components/AllHeroes'

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
    // ,
    // {
    //   path: '/all-heroes',
    //   name: 'AllHeroes',
    //   component: AllHeroes,
    //   meta: { bodyClass: 'all' }
    // }
  ]
})
