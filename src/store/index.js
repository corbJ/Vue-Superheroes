import Vue from 'vue'
import Vuex from 'vuex'
import dc from '@/data/dc.json'
import marvel from '@/data/marvel.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dc: dc,
    marvel: marvel
  },
  mutations: {
    // increment: state => state.count++,
    // decrement: state => state.count--,
    // changeFavoriteStatus (state, heroId) {
    //   heroList
    // }
  },
  getters: {
    getDcHeroes: state => state.dc,
    getMarvelHeroes: state => state.marvel
  },
  actions: {
    // changeFavoriteStatusAction(heroId) {
    //   this.$store.commit('changeFavoriteStatus', heroId)
    // }
  }
})
