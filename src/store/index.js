import Vue from 'vue'
import Vuex from 'vuex'

// JSON Data

import dc from '@/data/dc.json'
import marvel from '@/data/marvel.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dc: dc,
    marvel: marvel
  },
  mutations: {
    ADD_HERO (state, hero) {
      if (hero.publisher === 'DC Comics') {
        var dcIndex = state.dc.findIndex(heroes => heroes.id === hero.id)
        state.dc.splice(dcIndex, 1)
      } else if (hero.publisher === 'Marvel Comics') {
        var marvelIndex = state.marvel.findIndex(heroes => heroes.id === hero.id)
        state.marvel.splice(marvelIndex, 1)
      }
    },
    TOGGLE_BOOKMARK (state, hero) {
      if (hero.publisher === 'DC Comics') {
        var dcIndex = state.dc.findIndex(heroes => heroes.id === hero.id) // Get the index of the hero in dc.json that matches the payload's ID (hero.id)
        state.dc[dcIndex].bookmark = !hero.bookmark // Toggle the bookmark value of the hero
      } else if (hero.publisher === 'Marvel Comics') {
        var marvelIndex = state.marvel.findIndex(heroes => heroes.id === hero.id)
        state.marvel[marvelIndex].bookmark = !hero.bookmark
      }
    },
    UPDATE_HERO (state, localHero) {
      if (localHero.publisher === 'DC Comics') {
        var dcIndex = state.dc.findIndex(heroes => heroes.id === localHero.id)
        state.dc.splice(dcIndex, 1, localHero)
      } else if (localHero.publisher === 'Marvel Comics') {
        var marvelIndex = state.marvel.findIndex(heroes => heroes.id === localHero.id)
        state.marvel.splice(marvelIndex, 1, localHero)
      }
    },
    DELETE_HERO (state, hero) {
      if (hero.publisher === 'DC Comics') {
        var dcIndex = state.dc.findIndex(heroes => heroes.id === hero.id)
        state.dc.splice(dcIndex, 1) // Deletes the hero from our data locally
      } else if (hero.publisher === 'Marvel Comics') {
        var marvelIndex = state.marvel.findIndex(heroes => heroes.id === hero.id)
        state.marvel.splice(marvelIndex, 1)
      }
    }
  },
  getters: {
    getDcHeroes: state => state.dc,
    getMarvelHeroes: state => state.marvel
  },
  actions: {
    addHeroAction (context, hero) {
      context.commit('ADD_HERO', hero)
    },
    changeFavoriteStatusAction (context, hero) {
      context.commit('TOGGLE_BOOKMARK', hero)
    },
    updateHeroAction (context, localHero) {
      context.commit('UPDATE_HERO', localHero)
    },
    removeHeroAction (context, hero) {
      context.commit('DELETE_HERO', hero)
    }
  }
})
