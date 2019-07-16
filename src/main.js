// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import 'babel-polyfill' // IE11 & Safari 9 support for Vuetify
import vbclass from 'vue-body-class' // Body classes in router

// Internationalization plugin

import VueI18n from 'vue-i18n'
import messages from '@/lang/messages'

// Framework & CSS

// import 'normalize.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/scss/app.scss'

// Files & Components

import router from '@/router'
import store from '@/store'
import App from '@/App'

// Vue.use

Vue.use(vbclass, router)

Vue.use(VueI18n)
let locale = navigator.language
const i18n = new VueI18n({
  fallbackLocale: 'fr-FR',
  locale: locale,
  messages
})

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: '#0282f9', // DC Comics
    secondary: '#e62429' // Marvel Comics
  }
})

Vue.config.productionTip = false // Prevents production tip on Vue startup

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
