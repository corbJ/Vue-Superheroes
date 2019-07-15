// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill' // IE11 & Safari 9 support for Vuetify
import Vue from 'vue'
import store from '@/store'
import VueI18n from 'vue-i18n'
import messages from '@/lang/messages'
import Vuetify from 'vuetify'
import App from '@/App'
import router from '@/router'
import vbclass from 'vue-body-class'
// import 'normalize.css'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/scss/app.scss'

Vue.use(VueI18n)
Vue.use(vbclass, router)
Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: '#0282f9', // DC Comics
    secondary: '#e62429' // Marvel Comics
  }
})

Vue.config.productionTip = false

let locale = navigator.language
const i18n = new VueI18n({
  fallbackLocale: 'fr-FR',
  locale: locale,
  messages,
  silentTranslationWarn: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
})
